import React, { useState } from "react";

interface FirstNameProps {
  cb: (field: string, value: string) => void;
}

const FirstName: React.FC<FirstNameProps> = (props) => {
  const [FirstName, setFirstname] = useState("");
  return (
    <>
      <div>
        FirstName:{" "}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setFirstname(value);
          }}
          value={FirstName}
        ></input>
      </div>
      <button onClick={() => props.cb("FirstName", FirstName)}>Next</button>
    </>
  );
};

export default FirstName;
