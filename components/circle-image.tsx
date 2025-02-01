"use client";

import Image from "next/image";

const CircleImage = () => {
  return (
    <div className="bottom-0 right-0 hidden md:absolute md:inline-block">
      <Image
        src="/circles.png"
        width="200"
        height="200"
        className="h-full w-full"
        alt="Particles "
      />
    </div>
  );
};

export default CircleImage;
