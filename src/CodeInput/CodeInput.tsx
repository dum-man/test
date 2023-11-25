import { useImperativeHandle, useRef, forwardRef, Dispatch, SetStateAction } from "react";
import styles from "./CodeInput.module.css";

interface CodeInputProps {
  digits: string[];
  setDigits: Dispatch<SetStateAction<string[]>>;
}

interface CodeInputHandle {
  focus: () => void;
}

const CodeInput = forwardRef<CodeInputHandle, CodeInputProps>(function Input(
  { digits, setDigits },
  ref
) {
  const inputRefs = useRef(new Array(digits.length));

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRefs.current[0].focus();
    },
  }));

  const handleChange = (index: number, newValue: string) => {
    if (newValue.length > 1) {
      setDigits(newValue.split(""));
      inputRefs.current[0].blur();
    } else {
      const oldDigit = digits[index];
      const newDigit = newValue.trim().replace(oldDigit, "");
      if (newDigit < "0" || newDigit > "9") {
        return;
      }

      setDigits((prev) => {
        const copy = [...prev];
        copy[index] = newValue;
        return copy;
      });

      const inputs = inputRefs.current;
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      } else {
        inputs[index].blur();
      }
    }
  };

  const handleKeyDown = (index: number, key: string) => {
    if (key !== "Backspace") {
      return;
    }
    if (digits[index]) {
      setDigits((prev) => {
        const copyDigits = [...prev];
        copyDigits[index] = "";
        return copyDigits;
      });
    } else if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // useEffect(() => {
  //   const cb = (evt: any) => {
  //     console.log(evt);
  //   };
  //   window.addEventListener("paste", (evt) => evt.target);
  //   return () => window.removeEventListener("paste", cb);
  // }, []);

  // useEffect(() => {
  //   const fn = (event: any) => {
  //     console.log("here", event.target.value);
  //   };
  //   window.addEventListener("paste", fn);
  //   return () => window.removeEventListener("paste", fn);
  // }, []);

  // const handlePaste = (evt: React.ClipboardEventHandler<HTMLInputElement>) => {
  //   return;
  // };

  return (
    <div className={styles["wrapper"]}>
      {digits.map((digit, idx) => (
        <input
          type="text"
          key={idx}
          className={styles["input"]}
          value={digit}
          onChange={(event) => handleChange(idx, event.target.value)}
          onKeyDown={(event) => handleKeyDown(idx, event.nativeEvent.key)}
          ref={(ref) => (inputRefs.current[idx] = ref)}
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={6}
          pattern="\d{6}"
        />
      ))}
    </div>
  );
});
export default CodeInput;
