"use client";

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";

import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h1 className="text-center text-2xl leading-tight md:mt-10 md:text-left md:text-5xl">
          Toda mi <span className="font-bold text-secondary">trayectoria profesional</span>
        </h1>

        <CounterServices />

        <TimeLine />
      </ContainerPage>
    </>
  );
};

export default AboutMePage;
