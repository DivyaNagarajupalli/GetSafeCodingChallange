import { useState, useEffect } from "react";

const useVal = (value: string) => {
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    return value ? setDisable(false) : setDisable(true);
  }, [value]);

  return disable;
};

export default useVal;
