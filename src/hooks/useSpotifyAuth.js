import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID; // Reemplázalo con tu Client ID
const REDIRECT_URI = "https://spotify-queue.netlify.app";
const SCOPES = ["user-top-read"];
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${SCOPES.join("%20")}`;

const useSpotifyAuth = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate(); // 🚀 Agregar useNavigate()

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = new URLSearchParams(hash.substring(1)).get("access_token");
      if (token) {
        setToken(token);
        window.localStorage.setItem("spotify_token", token);
        window.location.hash = "";
      }
    } else {
      const storedToken = window.localStorage.getItem("spotify_token");
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  // ✅ Función corregida de Cerrar Sesión
  const logout = () => {
    window.localStorage.removeItem("spotify_token");
    setToken(null);
    
    toast.success("Sesión cerrada correctamente 🚪", {
      position: "bottom-center",
      style: {
        background: "#ff4d4d",
        color: "white",
        fontWeight: "bold",
      },
    });

    setTimeout(() => {
      navigate("/"); // ✅ Ahora redirige correctamente
    }, 500); // Agregamos un pequeño retraso para que se vea la notificación
  };

  return { token, AUTH_URL, logout };
};

export default useSpotifyAuth;
