import { useState, useEffect } from "react";

const useVal = (value: string) => {
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    console.log(" from useeffect");
    return value ? setDisable(false) : setDisable(true);
  }, [value]);

  return disable;
};

export default useVal;
