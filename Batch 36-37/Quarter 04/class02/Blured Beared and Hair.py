import cv2
import face_detection
import hair_segmentation

# Load the Haar cascade classifier for face detection
face_detector = face_detection.FaceDetector()

# Load the hair segmentation model
hair_segmentor = hair_segmentation.HairSegmentor()

cap = cv2.VideoCapture(0)

while True:
    ret, img = cap.read()

    # Detect faces in the image
    faces = face_detector.detect_faces(img)

    # Iterate through each detected face
    for face in faces:
        # Extract the face bounding box
        x1, y1, x2, y2 = face.bounding_box

        # Extract the beard and hair region within the face bounding box
        beard_region = img[y1:y2, x1:x2]

        # Segment the beard and hair region
        hair_mask = hair_segmentor.segment_hair(beard_region)

        # Apply blurring to the beard and hair region
        blurred_beard = cv2.blur(beard_region, (50, 50))

        # Replace the original beard and hair region with the blurred version
        img[y1:y2, x1:x2] = blurred_beard

    # Display the original and blurred images
    cv2.imshow("Original Image", img)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cv2.destroyAllWindows()
