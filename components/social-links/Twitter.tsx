"use client";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { NewTwitterIcon } from "../Icons";

const TwitterIcon = () => {
  const [transform, setTransform] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 5;
    const y = ((e.clientY - top) / height - 0.5) * 5;
    setTransform({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div
    
      className="relative rounded-xl overflow-hidden shadow-xl hover:cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="https://twitter.com/harshyadavone"
        className=" transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          style={{
            transform: `translate(${transform.x}%, ${transform.y}%)`,
            transition: "transform 0.3s",
          }}
          className="hover:bg-gray-500/20 hover:cursor-pointer duration-100 transition-all p-2 rounded-md"
        >
          <NewTwitterIcon width={20} height={20} />
        </div>
      </Link>
    </div>
  );
};

export default TwitterIcon;
