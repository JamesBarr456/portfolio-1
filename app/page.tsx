import CoverParticles from "./components/cover-particles"



/**
 * 
 * Components
 */
;
export default function Home() {
  return (
<main>
  <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradiente-cover">
    <CoverParticles/>
    <p>Introducciones</p>
  </div>
</main>
  );
}
