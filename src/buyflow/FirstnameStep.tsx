import React, { useState } from "react";
import useVal from "./useVal";

interface FirstNameProps {
  cb: (field: string, value: string) => void;
}

const FirstName: React.FC<FirstNameProps> = (props) => {
  const [FirstName, setFirstname] = useState("");
  const disable = useVal(FirstName);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };

  return (
    <>
      <div>
        FirstName:{" "}
        <input type="text" onChange={handleChange} value={FirstName}></input>
      </div>
      <button
        disabled={disable}
        onClick={() => props.cb("FirstName", FirstName)}
      >
        Next
      </button>
    </>
  );
};

export default FirstName;
