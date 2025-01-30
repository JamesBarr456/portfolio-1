"use client";

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 right-0 hidden md:absolute md:inline-block"
    >
      <Image
        src="/avatar-1.png"
        width="400"
        height="400"
        className="h-full w-full"
        alt="Particles "
      />
    </MotionTransition>
  );
}
