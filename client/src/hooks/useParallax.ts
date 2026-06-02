import { useState, useEffect, RefObject } from 'react';

export function useParallax(ref: RefObject<HTMLElement>, multiplier: number = 0.05) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * multiplier * 100;
      const y = (clientY / innerHeight - 0.5) * multiplier * 100;
      
      setOffset({ x, y });
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [ref, multiplier]);

  return offset;
}
