import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

const FacialExpression = () => {
  const videoRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
    };

    const handleVideoPlay = () => {
      setInterval(async () => {
        if (!videoRef.current) return;

        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceExpressions();
        console.log(detections[0].expressions);
      }, 2000);
    };

    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.addEventListener("play", handleVideoPlay); // add only once
        })
        .catch((err) => console.error("Error accessing webcam: ", err));
    };

    loadModels().then(startVideo);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <video ref={videoRef} autoPlay muted className="w-full h-[70vh]"></video>
    </div>
  );
};

export default FacialExpression;
