import React, { useState } from "react";
import useVal from "./useVal";
import Iprops from "./Interfaceprops";

const LastName: React.FC<Iprops> = (props) => {
  const [lastname, setlastname] = useState("");
  const disable = useVal(lastname);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlastname(e.target.value);
  };
  return (
    <>
      <div>
        LastName:{" "}
        <input type="text" onChange={handleChange} value={lastname}></input>
      </div>
      <button disabled={disable} onClick={() => props.cb("lastname", lastname)}>
        Next
      </button>
    </>
  );
};

export default LastName;
