import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const input = document.querySelector("[autocomplete=one-time-code")!;
    input.addEventListener("input", () =>
      // @ts-ignore
      input.style.setProperty("--_otp-digit", input.selectionStart)
    );
  }, []);

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
    </div>
  );
};

export default App;
