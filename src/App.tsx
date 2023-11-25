import { useState } from "react";
import OtpInput from "react-otp-input";

const App = () => {
  const [otp, setOtp] = useState("");

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
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        inputType="number"
      />
      <input
        type="text"
        autoComplete="one-time-code"
        inputMode="numeric"
        placeholder="Код из sms"
        pattern="[0-9]*"
        maxLength={4}
      />
    </div>
  );
};

export default App;
