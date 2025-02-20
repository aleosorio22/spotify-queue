import { useEffect, useState } from "react";
import useSpotifyAuth from "../hooks/useSpotifyAuth";
import useQueue from "../hooks/useQueue";
import { FaTrash, FaPlus, FaStar, FaSignOutAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TopTracks = () => {
  const { token, logout } = useSpotifyAuth();
  const [topTracks, setTopTracks] = useState([]);
  const { queue, enqueue, dequeue } = useQueue();
  const [selectedPriority, setSelectedPriority] = useState(2);

  useEffect(() => {
    if (!token) return;

    const fetchTopTracks = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/top/tracks?limit=10",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        setTopTracks(
          data.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists.map((artist) => artist.name).join(", "),
            album: track.album.name,
            image: track.album.images[0]?.url,
            url: track.external_urls.spotify,
          }))
        );
      } catch (error) {
        console.error("Error al obtener las canciones:", error);
      }
    };

    fetchTopTracks();
  }, [token]);

  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-background text-white px-6 py-10">
        
      <h2 className="text-3xl font-bold mb-4">Tus 10 canciones más escuchadas:</h2>
      {/* Botón de Cerrar Sesión */}
      {token && (
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
            onClick={logout}
          >
            <FaSignOutAlt />
            Cerrar Sesión
          </button>
        )}
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg text-gray-300 max-w-2xl mb-6">
        <h3 className="text-lg font-bold text-white mb-2">¿Cómo funciona?</h3>
        <ul className="list-disc list-inside text-sm">
          <li>Selecciona la prioridad de la canción antes de agregarla.</li>
          <li>Las canciones con prioridad alta se reproducen primero.</li>
          <li>Haz clic en el botón 🗑 para reproducir la siguiente canción en la cola.</li>
          <li>Las notificaciones te indican qué canción está sonando.</li>
        </ul>
      </div>


      {/* Selector de prioridad */}
      <div className="mb-4 flex gap-4">
        <label className="text-white">Prioridad:</label>
        <select
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(parseInt(e.target.value))}
          className="bg-gray-800 text-white px-3 py-1 rounded-lg"
        >
          <option value="1">🔥 Alta</option>
          <option value="2">⚡ Media</option>
          <option value="3">🌙 Baja</option>
        </select>
      </div>

      {token ? (
        <>
          {/* Lista de canciones más escuchadas */}
          <ul className="space-y-4 w-full max-w-2xl">
            {topTracks.map((track, index) => (
              <motion.li
                key={track.id}
                className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition"
              >
                <img src={track.image} alt={track.name} className="w-16 h-16 rounded-md" />
                <div className="text-left flex-1">
                  <p className="text-lg font-semibold">{index + 1}. {track.name}</p>
                  <p className="text-sm text-gray-400">{track.artist} - {track.album}</p>
                </div>
                <button
                  className="text-green-400 hover:text-green-500 transition"
                  onClick={() => enqueue(track, selectedPriority)}
                >
                  <FaPlus />
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mostrar la cola de reproducción */}
          <div className="mt-10 w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Cola de Reproducción</h2>
            <AnimatePresence>
              {queue.length > 0 ? (
                <ul className="space-y-4">
                  {queue.map((track, index) => (
                    <motion.li key={track.id} className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg shadow-lg">
                      <img src={track.image} alt={track.name} className="w-12 h-12 rounded-md" />
                      <div className="text-left flex-1">
                        <p className="text-lg font-semibold">{track.name}</p>
                        <p className="text-sm text-gray-400">{track.artist}</p>
                      </div>
                      {index === 0 && (
                        <button className="text-red-400 hover:text-red-500 transition" onClick={dequeue}>
                          <FaTrash />
                        </button>
                      )}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">La cola está vacía.</p>
              )}
            </AnimatePresence>
          </div>
        </>
      ) : (
        <p className="text-lg text-red-400">⚠ Debes iniciar sesión para ver tus canciones</p>
      )}
    </div>
  );
};

export default TopTracks;
