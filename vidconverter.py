from keras.models import load_model
import keras_applications
import keras_efficientnets
import cv2
import matplotlib.pyplot as plt
import numpy as np
from mtcnn import MTCNN
import time
import PIL.Image as Image

model = load_model("256x256_MaskDetector_9860.h5")


face_detector = MTCNN()
cap = cv2.VideoCapture("test.mp4")
fps = cap.get(cv2.CAP_PROP_FPS)
width = cap.get(cv2.CAP_PROP_FRAME_WIDTH)   # float
height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)  # float
out = cv2.VideoWriter('output.mp4', -1,fps, (int(width), int(height)))
cdict = {0: "With Mask", 1: "No Mask"}
target_size = (256, 256, 3)
inStore = 0
mask = 0

def getPredictedCrop(image_data):
  pred_crop_data = []
  pred_coords_all = []
  faces_pred = face_detector.detect_faces(image_data)
  for face in faces_pred:
    pred_box = face['box']
    for i in range(len(pred_box)):
      if pred_box[i] < 0:
        pred_box[i] = 0
      # also add case for if x is more than width or y is more than height
    pred_coords = [pred_box[0], pred_box[0]+pred_box[2], pred_box[1], pred_box[1]+pred_box[3]]
    pred_box = image_data[pred_coords[2]:pred_coords[3], pred_coords[0]:pred_coords[1]]
    pred_crop_data.append(pred_box)
    pred_coords_all.append(pred_coords)
  return (pred_crop_data, pred_coords_all)


frameNumber = 0
buffer = 0


while cap.isOpened():
    start = time.time()
    ret, frame = cap.read()
    if not ret:
        print("end of video")
        break
    if not frameNumber % 10 == 0:
        out.write(buffer)
        frameNumber += 1
        # print("INCREASED")
        continue
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    faces_pred = face_detector.detect_faces(frame)
    # get mask model prediction for each crop (face)
    pred_crop_all = getPredictedCrop(frame)
    for i in range(len(pred_crop_all[0])):
        pred_crop = pred_crop_all[0][i]
        pred_coords = pred_crop_all[1][i]
        im = np.asarray(Image.fromarray(pred_crop).resize(target_size[:2]))/255.
        raw_pred = model.predict(np.expand_dims(im, 0))
        # print(pred_coords)
        # parse prediction
        if raw_pred[0][0] > 0.000001:
            cv2.putText(frame, "no_mask", (pred_coords[0], pred_coords[2]), cv2.FONT_HERSHEY_DUPLEX, 1, (255, 0, 0))
        else:
            cv2.putText(frame, "with_mask", (pred_coords[0], pred_coords[2]), cv2.FONT_HERSHEY_DUPLEX, 1, (255, 0, 0))
        # draw predicted face bboxes
    for face in faces_pred:
        box=face['box']
        frame=cv2.rectangle(frame,
                    (box[0], box[1]),
                    (box[0]+box[2], box[1] + box[3]),
                    (255, 0, 0),
                    2)

    frame = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)
    cv2.imshow('Mask Detection', frame)
    buffer = frame
    out.write(frame)
    print(frameNumber)  
    frameNumber += 1
    end = time.time()
    print(1/(end-start), " FPS")

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
out.release()
cv2.destroyAllWindows()