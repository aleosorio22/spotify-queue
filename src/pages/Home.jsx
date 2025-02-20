import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaSpotify, FaGithub } from "react-icons/fa";
import useSpotifyAuth from "../hooks/useSpotifyAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { token, AUTH_URL } = useSpotifyAuth();
  const navigate = useNavigate();

  // 🔹 Redirigir automáticamente si el usuario ya está autenticado
  useEffect(() => {
    if (token) {
      navigate("/top-tracks");
    }
  }, [token, navigate]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-background text-white text-center px-6">
      {/* Animación flotante del título */}
      <motion.h1
        className="text-6xl font-bold flex items-center gap-3 mb-4"
        initial={{ y: -10 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaSpotify className="text-primary" />
        Spotify Queue
      </motion.h1>

      {/* Descripción */}
      <p className="text-lg text-gray-300 max-w-2xl mb-8">
        Explora tus 10 canciones más escuchadas en Spotify y gestiona tu propia
        cola de reproducción con nuestra interfaz moderna y elegante.
      </p>

      {/* Botón de inicio de sesión o ir a la lista de canciones */}
      {!token && (
        <motion.a
          href={AUTH_URL}
          className="flex items-center gap-3 bg-primary text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaSpotify className="text-2xl" />
          Iniciar sesión con Spotify
        </motion.a>
      )}

      {/* Información del desarrollador */}
      <div className="absolute bottom-4 text-gray-400 flex flex-col items-center">
        <p className="text-sm">Desarrollado por Alejandro Osorio</p>
        <a
          href="https://github.com/aleosorio22/spotify-queue"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition"
        >
          <FaGithub className="text-xl" />
          Mi GitHub
        </a>
      </div>
    </div>
  );
};

export default Home;
