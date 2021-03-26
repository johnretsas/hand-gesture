// 0. Install fingerpose npm install fingerpose
// 1. Add Use State
// 2. Import emojis and finger pose import * as fp from "fingerpose";
// 3. Setup hook and emoji object
// 4. Update detect function for gesture handling
// 5. Add emoji display to the screen

///////// NEW STUFF ADDED USE STATE
import React, { useRef, useState, useEffect } from "react";
///////// NEW STUFF ADDED USE STATE

// import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";

///////// NEW STUFF IMPORTS
import * as fp from "fingerpose";
///////// NEW STUFF IMPORTS
import PointUpRightGesture from "./PointUpRight";
import PointDownRightGesture from "./PointDownRight";
import PointUpLeftGesture from "./PointUpLeft";
import PointDownLeftGesture from "./PointDownLeft";
import GoalPost from "./GoalPost";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [direction, setDirection] = useState('');

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      ///////// NEW STUFF ADDED GESTURE HANDLING

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          PointDownRightGesture,
          PointUpRightGesture,
          PointUpLeftGesture,
          PointDownLeftGesture
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          setDirection(gesture.gestures[maxConfidence].name)
          // setEmoji(gesture.gestures[maxConfidence].name);
        }
      }

      ///////// NEW STUFF ADDED GESTURE HANDLING

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => { runHandpose() }, []);
  const WIDTH = 320;
  const HEIGHT = 240;
  const POSITION = {
    right: 0,
  }
  return (
    <div className="App">
      <header className="App-header" style={{ height: HEIGHT }}>
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            ...POSITION,
            textAlign: "center",
            zindex: 8,
            width: WIDTH,
            height: HEIGHT,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            ...POSITION,
            textAlign: "center",
            zindex: 9,
            width: WIDTH,
            height: HEIGHT,
          }}
        />
        <div style={{ fontSize: 40, flex: 1, display: 'flex', justifyContent: 'space-around' }}>
          <div 
            id='users-choice' 
            style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {direction}
          </div>
          <div style={{ width: '50%' }}>
            <GoalPost direction={direction}/>
          </div>
        </div>
        <div style={{ width: WIDTH }}></div>
      </header>
    </div>
  );
}

export default App;
