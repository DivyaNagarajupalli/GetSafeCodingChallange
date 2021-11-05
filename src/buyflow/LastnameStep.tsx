import React, { useState } from "react";
import useVal from "./useVal";

interface LastNameProps {
  cb: (field: string, value: string) => void;
}

const LastName: React.FC<LastNameProps> = (props) => {
  const [LastName, setLastname] = useState("");
  const disable = useVal(LastName);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };
  return (
    <>
      <div>
        LastName:{" "}
        <input type="text" onChange={handleChange} value={LastName}></input>
      </div>
      <button disabled={disable} onClick={() => props.cb("LastName", LastName)}>
        Next
      </button>
    </>
  );
};

export default LastName;
