import React, { useState } from "react";
import useVal from "./useVal";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0);
  const disable = useVal(age.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };

  return (
    <>
      <div>
        Age:{" "}
        <input
          type="number"
          min="1"
          max="80"
          onChange={handleChange}
          value={age}
        ></input>
      </div>
      <button disabled={disable} onClick={() => props.cb("age", age)}>
        Next
      </button>
    </>
  );
};

export default AgeStep;
