import React, { useState } from "react";
import useVal from "./useVal";
import Iprops from "./Interfaceprops";

const FirstName: React.FC<Iprops> = (props) => {
  const [firstname, setfirstname] = useState("");
  const disable = useVal(firstname);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfirstname(e.target.value);
  };

  return (
    <>
      <div>
        FirstName:{" "}
        <input type="text" onChange={handleChange} value={firstname}></input>
      </div>
      <button
        disabled={disable}
        onClick={() => props.cb("firstname", firstname)}
      >
        Next
      </button>
    </>
  );
};

export default FirstName;
