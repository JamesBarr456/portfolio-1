import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:absolute md:inline-block"
    >
      <Image
        src="/services.png"
        width="400"
        height="400"
        className="h-full w-[350px]"
        alt="Avatar "
      />
    </MotionTransition>
  );
};

export default AvatarServices;
