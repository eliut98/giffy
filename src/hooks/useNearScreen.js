import { useState, useEffect, useRef } from "react";

export const useNearScreen = ({ rootMargin }) => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const onView = (entries) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onView, { rootMargin });

    observer.observe(fromRef.current);

    return () => observer.disconnect();
  });

  return { isNearScreen, fromRef };
};
