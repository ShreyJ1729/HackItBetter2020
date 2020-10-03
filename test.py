import dnn

dnn_detector = dnn.FaceDetector()
import cv2 as cv

while True:
    ret, frame = cv2.VideoCapture(0).read()
    _, bboxes = dnn_detector.process_frame(frame, threshold=0.4)
    print(bboxes)