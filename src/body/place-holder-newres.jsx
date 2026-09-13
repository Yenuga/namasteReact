import { useRef, useEffect } from "react";

const PlaceHolder = ({ getData }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("call update to get new res");
          getData();
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={ref}></div>;
};
export default PlaceHolder;
