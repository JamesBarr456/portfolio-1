import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <AvatarPortfolio />
      <CircleImage />
      <div className="flex h-full flex-col justify-center">
        <h1 className="text-center text-2xl leading-tight md:mb-5 md:text-4xl">
          Mis últimos <span className="font-bold text-secondary">trabajos realizados</span>
        </h1>

        <div className="relative z-10 mx-auto mt-4 grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-4">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
