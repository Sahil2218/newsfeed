import React, { useEffect } from 'react';
import cv2 from 'opencv.js'; // Assuming you have opencv.js available in your project

const FaceDetection = () => {
    useEffect(() => {
        // Load the pre-trained Haar Cascade face detector
        const faceCascade = new cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml');

        // Initialize the webcam
        const video = document.createElement('video');
        document.body.appendChild(video);
        video.autoplay = true;
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    video.play();
                    detectFaces(video, faceCascade);
                };
            })
            .catch((error) => {
                console.error('Error accessing webcam:', error);
            });

        return () => {
            video.srcObject.getTracks().forEach(track => track.stop());
            document.body.removeChild(video);
        };
    }, []);

    const detectFaces = (video, faceCascade) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const drawFaces = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const gray = cv2.cvtColor(imageData, cv2.COLOR_RGBA2GRAY);
            const faces = faceCascade.detectMultiScale(gray);

            faces.forEach(([x, y, w, h]) => {
                context.beginPath();
                context.rect(x, y, w, h);
                context.strokeStyle = 'red';
                context.lineWidth = 2;
                context.stroke();
            });

            requestAnimationFrame(drawFaces);
        };

        drawFaces();
    };

    return null; // Face detection is handled in useEffect
};

export default FaceDetection;
