import React, { useState } from "react";
import SpeechRecognition from "react-speech-recognition";
import "./App.css";

const App = props => {
  const [score, setScore] = useState(0);
  const data = [
    { key: "Red", value: "red" },
    { key: "One", value: "1" },
    { key: "Yellow", value: "yellow" },
    { key: "Blue", value: "blue" },
    { key: "Nine", value: "9" }
  ];
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    recognition
  } = props;
  const index = score % data.length;

  if (!browserSupportsSpeechRecognition) {
    return "open with google chrome";
  } else recognition.lang = "en-US";

  const HandleIncludesWord = () => {
    resetTranscript();
    setScore(score + 1);
  };

  return (
    <div className="container">
      <div
        className="showCircle"
        style={{
          backgroundColor: isNaN(data[index].value) && data[index].value
        }}
      >
        {!isNaN(data[index].value) && data[index].value}
      </div>
      <div className="textToSay">{`say: ${data[index].key}`}</div>
      {(transcript.toLowerCase().includes(data[index].key.toLowerCase()) ||
        transcript.toLowerCase().includes(data[index].value.toLowerCase())) &&
        HandleIncludesWord()}
    </div>
  );
};

export default SpeechRecognition(App);
