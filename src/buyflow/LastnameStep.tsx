import React, { useState } from "react";

interface LastNameProps {
  cb: (field: string, value: string) => void;
}

const LastName: React.FC<LastNameProps> = (props) => {
  const [LastName, setLastname] = useState("");
  return (
    <>
      <div>
        LastName:{" "}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setLastname(value);
          }}
          value={LastName}
        ></input>
      </div>
      <button onClick={() => props.cb("LastName", LastName)}>Next</button>
    </>
  );
};

export default LastName;
