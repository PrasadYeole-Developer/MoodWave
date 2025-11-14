import React, { useEffect } from "react";
import * as faceapi from "face-api.js";

const FacialExpression = () => {
  const videoRef = React.useRef();
  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
    };

    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Error accessing webcam: ", err));
    };

    const handleVideoPlay = () => {
      setInterval(async () => {
        const displaySize = {
          width: videoRef.current.videoWidth,
          height: videoRef.current.videoHeight,
        };
        faceapi.matchDimensions(displaySize);
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceExpressions();
        console.log(detections);
      }, 2000);
    };
    loadModels().then(startVideo);
    videoRef.current &&
      videoRef.current.addEventListener("play", handleVideoPlay);
  }, []);
  return (
    <div className="relative">
      <video ref={videoRef} autoPlay muted className="w-full h-screen"></video>
    </div>
  );
};

export default FacialExpression;
