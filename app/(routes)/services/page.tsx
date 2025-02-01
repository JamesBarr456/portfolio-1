import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="mx-auto grid h-screen max-w-5xl items-center justify-center gap-6 md:grid-cols-2">
        <div className="mt-20 max-w-[450px] md:mt-0">
          <h1 className="text-center text-2xl leading-tight md:mb-5 md:text-left md:text-4xl">
            Mis <span className="font-bold text-secondary"> servicios.</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300">
            Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web
            y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML,
            CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la
            identidad de marca de mis clientes y mejoran su presencia en línea.
          </p>
          <button className="rounded-lg bg-secondary px-3 py-2 hover:bg-secondary/65">
            Contacta conmigo
          </button>
        </div>

        {/* SLIDER */}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
