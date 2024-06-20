'use client'

import { useState, MouseEvent } from 'react';
import Image from 'next/image';

const HoverImage = () => {
  const [transform, setTransform] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 5;
    const y = ((e.clientY - top) / height - 0.5) * 5;
    setTransform({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative w-60 h-60 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src="/profile-pic.png"
        alt="Profile Picture"
        layout="responsive"
        width={70}
        height={70}
        style={{
          transform: `translate(${transform.x}%, ${transform.y}%)`,
          transition: 'transform 0.3s ease', 
        }}
      />
    </div>
  );
};

export default HoverImage;
