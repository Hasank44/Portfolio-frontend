import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";


const Counter = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration / 16);
      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(counter);
          setCount(target);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-2xl font-extrabold text-green-400">
      {count}
    </span>
  );
};
export default Counter;