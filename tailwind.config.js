/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DB954", // Verde de Spotify
        secondary: "#191414", // Negro Spotify
        accent: "#535353", // Gris oscuro
        background: "#121212", // Fondo principal
      },
    },
  },
  plugins: [],
};
