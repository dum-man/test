import { useState } from "react";
import CodeInput from "./CodeInput/CodeInput";

const App = () => {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);

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
    </div>
  );
};

export default App;
