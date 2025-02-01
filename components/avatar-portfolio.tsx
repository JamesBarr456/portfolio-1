"use client";

import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarPortfolio = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 left-0 hidden md:absolute md:inline-block"
    >
      <Image
        src="/avatar-works.png"
        width="250"
        height="250"
        className="h-full w-full"
        alt="Particles "
      />
    </MotionTransition>
  );
};

export default AvatarPortfolio;
