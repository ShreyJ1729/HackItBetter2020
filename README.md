# MaskNet: Automated Face Mask Detection For Better COVID Data Analytics | HackItBetter2020

### Written by Shrey J. and Ethan S.
Mask detection, website for visualization, (&amp; deploying on RPI?)


Presentation Video Link: https://www.youtube.com/watch?v=gSGQ7Trypsk (or click the thumbnail below)
Devpost Link: https://devpost.com/software/hackitbetter2020

[![MaskNet Presentation Video](http://img.youtube.com/vi/gSGQ7Trypsk/0.jpg)](http://www.youtube.com/watch?v=gSGQ7Trypsk "MaskNet: Automated Face Mask Detection for better COVID Data Analytics | HackItBetter2020")


##  Inspiration
We are living in a public health crisis, where a polarized political atmosphere and general social unrest has led to unnecessarily complex and political stances on wearing face masks. One of the major reasons that much is unknown about the spread of COVID and why tactics such as contact-tracing are sometimes fruitless is because of the lack of a reliable and widespread method of collecting data on metrics such as face mask usage. In order to provide such a solution, MaskNet was developed. MaskNet is an automated face-mask detection pipeline to provide better public health data analytics and allow authorities to pinpoint COVID risk areas. The software could also be used to generate real-time maps so that users can see which places around them are frequently visited by non-mask users and can exercise caution in those zones.

## What it does

MaskNet is a live camera system that detects whether someone is entering a store with or without a facemask. It then sends this info to a firebase database which produces a visualization on a website as you can see in our demo video. This way, people can see high COVID risk areas  (where people are not wearing face masks regularly) and take appropriate measures. It can also be used by authorities to determine areas that need medical supplies and where there is high inequality.

##  How we built it
The data used in this project consisted of 4236 unique images containing a total of 15411 unique faces, separated into 20 different classes based on the type of facial covering. Since this was a binary classification problem, only the images from three of these classes were considered (no covering, lower-face mask, and mask worn incorrectly). The first problem to solve was that of accurately extracting faces from an image containing one or more. This was done through a Multi-Cascade CNN method (mtcnn). The second issue to resolve was a heavy class imbalance in the image dataset favoring masked faces, and this was solved through under-sampling the data and implementing a weighted loss function. To classify whether a person’s face was wearing a mask, a CNN architecture was developed and the CNN was trained with over 5500 unique face images of vastly differing degrees of resolutions, zooms, orientations, and skin colors. After optimizing and fine-tuning, the final test accuracy of the model was 96.8%, which is an achievement considering the fact that a decent proportion of the training images were excessively blurry or had other occlusions such as shadows or graininess. Finally, the two networks were combined into a single system that segmented, extracted, and resized faces from an image frame and then evaluated the face-mask CNN classifier on each of the faces. This was then packaged into a program that ran the composed pipeline on a video stream and showed live predictions.
We used the center prop to dynamically change the range and zoom of the map when a store is pressed.
On componentDidMount, we initialize an event listener for changes to the Firebase Realtime Database so that people counts and mask counts can be updated as they are processed by the backend
## Challenges we ran into

Challneges for web: A challenge encountered in the web development is the complexity of designing a user interface that is simple to use and also visualizes the received metrics from the MaskNet camera backend. We use an Express backend to index the received bounding box coordinates and map them as either coming into the store or leaving the store. The backend instance also sends this data to Firebase Realtime Database, and our front-end listens to the database and automatically rerenders with any changes to the store customer count as well as the customer with 
mask count.

Challenges for the ML: OpenCV drawing lines and keeping track of all the bounding box coordinates was kind of hard. It was also difficult predicting when someone entered, since we needed to keep track of both the direction the person was going and then threshold the x value of the center of the face bounding box based on that. Additionally, the algorithm to track each face was also a challenge. Due to the time constraint, we ended up using a naive approach of assuming that the same face would have the minimum euclidean distance between the centers of the bounding boxes of consecutive frames. Based on this we were able to the approximate the face's average velocity and then appropriately send a request to the firebase database when someone had entered.

##  Accomplishments that we're proud of
Really proud of the accurate ML model that predicts whether someone is wearing a face mask. It even managed to predict whether someone is wearing the mask incorrectly, or if they're just covering their face with their hands. For this, kudos to the great quality data on kaggle. We're also proud of the algorithm that predicts the direction of movement and thresholds accordingly. This felt a lot like a traditional coding competition problem.

##  What we learned
Learned about doing advanced ML in python, interfacing with google maps with react, and in general combining these two different systems into one coherent pipeline. We learned that transfer learning is really powerful, and we learned some ways to reduce class imbalance when training a computer vision model. Lastly we learned that you shouldn't procrastinate until 20 minutes before the deadline to start your video :)

##  What's next
We hope to further integrate more ways to keep track of COVID-19 in your community. By using public health sources and county-specific virus metrics, we hope to outline entire counties by particular counties and move to a “heat-map” type of visualization. This will make it even easier for people to find stores to support while staying safe in this public health crisis.
