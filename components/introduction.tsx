"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid h-full items-center p-6 py-20 md:grid-cols-2 md:py-0">
        <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
        <div className="flex max-w-md flex-col justify-center">
          <h1 className="mb-5 text-center text-2xl leading-tight md:mb-10 md:text-left md:text-4xl">
            Si puedes pensarlo, <br />
            <TypeAnimation
              sequence={[
                "puedes programarlo",
                1000,
                "puedes optimizarlo",
                1000,
                "puedes implementarlo",
                1000,
                "puedes desarrollarlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 md:text-xl">
            Como desarrollador frontend y creador de contenido, me dedico a combinar diseño y
            funcionalidad para crear experiencias digitales impactantes y accesibles.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <a
              href="/projects"
              className="text-md my-2 w-fit cursor-pointer rounded-xl border-2 px-3 py-2 transition-all hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </a>
            <a
              href="/contact"
              className="text-md my-5 w-fit cursor-pointer rounded-xl border-2 border-secondary px-3 py-2 text-secondary transition-all hover:shadow-xl hover:shadow-secondary"
            >
              Contacta conmigo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
