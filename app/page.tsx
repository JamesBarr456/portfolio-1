import TransitionPage from "@/components/transition-page";
import CoverParticles from "../components/cover-particles";

/**
 *
 * Components
 */
export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex h-full min-h-[100vh] bg-gradiente-cover bg-no-repeat">
        <CoverParticles />
        <p>Introducciones</p>
      </div>
    </main>
  );
}
