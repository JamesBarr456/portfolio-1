"use client";

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute top-5 z-40 inline-block w-full md:top-10"
    >
      <header>
        <div className="container mx-auto max-w-6xl justify-between md:flex">
          <Link href="/">
            <h1 className="my-3 text-center text-4xl font-bold md:text-left">
              Tarre
              <span className="text-secondary">Dev</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-secondary"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
