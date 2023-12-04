import { useEffect, useRef, useState } from "react";
import CodeInput from "./CodeInput/CodeInput";
import Webcam from "react-webcam";

const App = () => {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);

  const [mode, setMode] = useState<"environment" | "user">("user");

  const webcamRef = useRef<null | Webcam>(null);

  const videoConstraints = {
    width: 400,
    height: 300,
    facingMode: mode,
  };

  // useEffect(() => {
  //   navigator.mediaDevices
  //     .enumerateDevices()
  //     .then((res) => alert(JSON.stringify(res, null, 4)));
  // }, []);

  const handleToggle = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((data) => data.getTracks().forEach((track) => track.stop()));
    setMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <label>
        <span>One Time Code</span>
        <input
          type="text"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={6}
          pattern="\d{6}"
        />
      </label>
      <CodeInput digits={digits} setDigits={setDigits} />
      <Webcam
        ref={webcamRef}
        width={400}
        height={300}
        mirrored
        videoConstraints={videoConstraints}
      />
      <button onClick={handleToggle}>toggle {mode}</button>
    </div>
  );
};

export default App;
