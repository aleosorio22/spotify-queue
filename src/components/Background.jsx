import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Background = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 150 }, // Más partículas
          size: { value: 3 }, // Partículas más grandes
          move: { speed: 0.5 }, // Movimiento más fluido
          opacity: { value: 0.8 }, // Más visibles
          color: { value: "#ffffff" }, // Color blanco
          links: { enable: true, color: "#ffffff", opacity: 0.5 },
        },
        background: {
          color: "#121212",
        },
      }}
    />
  );
};

export default Background;
