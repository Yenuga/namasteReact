import { useState, useEffect } from "react";

export const useDeounce = (data, time) => {
  const [timer, setTimer] = useState();
  const [input, setInput] = useState();
  useEffect(() => {
    const timertemp = setTimeout(() => {
      setInput(data);
    }, time);
    setTimer(timertemp);
    return () => {
      clearTimeout(timer);
    };
  }, [data]);

  return [input];
};
