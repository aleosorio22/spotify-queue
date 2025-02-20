import { useState } from "react";
import { toast } from "react-hot-toast";

const useQueue = () => {
  const [queue, setQueue] = useState([]);

  // Agregar una canción con prioridad (enqueue)
  const enqueue = (track, priority = 2) => {
    const newTrack = { ...track, priority };
    setQueue((prevQueue) => [...prevQueue, newTrack].sort((a, b) => a.priority - b.priority));

    toast.success(`Agregaste "${track.name}" a la cola 🎵 (Prioridad: ${priority})`, {
      position: "bottom-center",
      style: {
        background: "#1DB954",
        color: "white",
        fontWeight: "bold",
      },
    });
  };

  // Sacar la canción con mayor prioridad (dequeue)
  const dequeue = () => {
    if (queue.length === 0) return null;

    const [first, ...rest] = queue;
    setQueue(rest);

    // Si hay una siguiente canción, mostrar que se está reproduciendo
    if (rest.length > 0) {
      toast(`🎶 Reproduciendo "${rest[0].name}"`, {
        position: "bottom-center",
        style: {
          background: "#1DB954",
          color: "white",
          fontWeight: "bold",
        },
      });
    } else {
      toast.error(`No hay más canciones en la cola 🚫`, {
        position: "bottom-center",
        style: {
          background: "#ff4d4d",
          color: "white",
          fontWeight: "bold",
        },
      });
    }

    return first;
  };

  // Mostrar la cola
  const mostrar = () => {
    return queue;
  };

  return { queue, enqueue, dequeue, mostrar };
};

export default useQueue;
