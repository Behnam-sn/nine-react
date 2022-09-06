import { RefObject, useEffect, useState } from "react";

interface useObserverProps {
  containerRef: RefObject<HTMLDivElement>;
  options: any;
}

export const useObserver = ({ containerRef, options }: useObserverProps) => {
  const [isVisable, setIsVisable] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisable(entry.isIntersecting);
  };

  useEffect(() => {
    const node = containerRef.current;

    const observer = new IntersectionObserver(callbackFunction, options);
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [containerRef, options]);

  return [isVisable];
};
