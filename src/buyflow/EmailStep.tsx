import React, { useState } from "react";
import useVal from "./useVal";

interface EmailStepProps {
  cb: (field: string, value: string) => void;
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState("");
  const disable = useVal(email);

  return (
    <>
      <div>
        Email:{" "}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value);
          }}
          value={email}
        ></input>
      </div>
      <button disabled={disable} onClick={() => props.cb("email", email)}>
        Next
      </button>
    </>
  );
};

export default EmailStep;
