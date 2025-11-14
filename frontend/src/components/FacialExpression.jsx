import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

const FacialExpression = () => {
  const videoRef = useRef();
  const maxVal = (expObject) => {
    let max = 0;
    for (let val of Object.values(expObject)) {
      if (val > max) max = val;
    }
    return max;
  };

  const detectMood = async () => {
    if (!videoRef.current) return;

    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();
    if (!detections || !detections.length) {
      console.log("No face detected");
    }
    const expressions = detections[0].expressions;
    const maxValue = maxVal(expressions);
    const dominantExpression = Object.keys(expressions).find(
      (key) => expressions[key] === maxValue
    );
    console.log(dominantExpression);
  };

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

    loadModels().then(startVideo);
  }, []);

  return (
    <>
      <div className="relative h-screen flex flex-col items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-full h-[70vh]"
        ></video>
        <button
          className="text-white bg-black px-6 py-4 rounded border-none mt-6 cursor-pointer hover:opacity-80 transition"
          onClick={detectMood}
        >
          Detect Mood
        </button>
      </div>
    </>
  );
};

export default FacialExpression;
