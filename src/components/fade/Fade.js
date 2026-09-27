import React, { useEffect, useRef, useState } from "react";

// Drop-in replacement for react-reveal's Fade (supports bottom/right/left/top,
// duration, distance), which relied on deprecated React lifecycles.
export function Fade({
  children,
  bottom,
  top,
  left,
  right,
  duration = 1000,
  distance = "20px",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  let offset = "none";
  if (bottom) offset = `translate3d(0, ${distance}, 0)`;
  else if (top) offset = `translate3d(0, -${distance}, 0)`;
  else if (right) offset = `translate3d(${distance}, 0, 0)`;
  else if (left) offset = `translate3d(-${distance}, 0, 0)`;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : offset,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
    </div>
  );
}

export default Fade;
