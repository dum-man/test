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
      />
    </div>
  );
};

export default App;
