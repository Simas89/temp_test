import React, { useRef, useEffect, useState } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface Dimensions {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

const useDimensions = () => {
  const [dimensions, setDimensions] = useState<DOMRect>({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  } as DOMRect);
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('resize', checkDimensions);
    checkDimensions();
  }, []);

  const checkDimensions = () => {
    if (ref.current) {
      setDimensions(ref.current.getBoundingClientRect());
    }
  };

  return { ref, dimensions };
};

export default useDimensions;
