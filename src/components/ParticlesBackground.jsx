import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: {
          color: "#121212", // Fondo oscuro
        },
        particles: {
          number: {
            value: 100, // Cantidad de partículas
          },
          size: {
            value: 2, // Tamaño de partículas
          },
          move: {
            speed: 0.5, // Velocidad de movimiento
          },
          opacity: {
            value: 0.7, // Opacidad de las partículas
          },
          color: {
            value: "#ffffff", // Color de las partículas (blancas)
          },
          links: {
            enable: true, // Conectar partículas con líneas
            color: "#ffffff",
            opacity: 0.3,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
