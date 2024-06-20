'use client'
// components/CustomCursor.tsx
import { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const mousePosition = useRef({ x: 0, y: 0 });

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;

      const easeFactor = 0.1; 
      setPosition(prevPos => ({
        x: prevPos.x + (mousePosition.current.x - prevPos.x) * easeFactor,
        y: prevPos.y + (mousePosition.current.y - prevPos.y) * easeFactor
      }));
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener('mousemove', moveCursor);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(requestRef.current!);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
