# 🎵 Spotify Queue - Administrador de tu Música en Cola

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://spotify-queue.netlify.app)

## 🎯 Descripción
**Spotify Queue** es una aplicación web moderna desarrollada con **React + Vite**, que permite visualizar las **10 canciones más escuchadas de un usuario en Spotify** y gestionarlas en una **cola de reproducción** utilizando una estructura FIFO (First In, First Out). Además, la cola de reproducción admite prioridades, lo que permite dar preferencia a ciertas canciones.

🚀 **Funcionalidades Principales:**
- 🔑 **Autenticación con Spotify** (OAuth 2.0 con "Implicit Grant Flow").
- 🎶 **Obtención de las 10 canciones más escuchadas** del usuario.
- 📌 **Cola de reproducción con prioridad** (FIFO y prioridad alta/media/baja).
- ✅ **Interfaz moderna y animaciones fluidas con TailwindCSS y Framer Motion.**
- 🌐 **Desplegado en Netlify con variables de entorno seguras.**

📌 **Demo en vivo:** [Spotify Queue en Netlify](https://spotify-queue.netlify.app)

---

## 📦 Tecnologías Usadas

| Tecnología       | Descripción |
|-----------------|-------------|
| ⚡ **React + Vite**  | Frontend rápido y modular |
| 🎨 **Tailwind CSS** | Estilos modernos y personalizables |
| 🏗️ **Framer Motion** | Animaciones suaves y atractivas |
| 🔥 **React Icons** | Iconos de FontAwesome y más |
| 🎵 **Spotify API** | Obtención de datos del usuario |
| ☁ **Netlify** | Despliegue continuo y hosting |

---

## 📥 Instalación y Uso

1️⃣ **Clona el repositorio:**
```sh
 git clone https://github.com/TU_USUARIO/spotify-queue.git
 cd spotify-queue
```

2️⃣ **Instala las dependencias:**
```sh
npm install
```

3️⃣ **Configura el archivo `.env` (NO SUBIR A GITHUB)**:
```sh
VITE_SPOTIFY_CLIENT_ID=TU_CLIENT_ID
VITE_REDIRECT_URI=http://localhost:5173
```

4️⃣ **Ejecuta el proyecto en modo desarrollo:**
```sh
npm run dev
```

5️⃣ **Accede a la aplicación en:**
```
http://localhost:5173
```

---

## 🚀 Despliegue en Producción con Netlify
📌 **No expongas tu `Client ID` en el código.**

1️⃣ **Sube tu código a GitHub:**
```sh
git add .
git commit -m "Subiendo Spotify Queue"
git push origin main
```

2️⃣ **En Netlify, configura las variables de entorno:**
- `VITE_SPOTIFY_CLIENT_ID=TU_CLIENT_ID`
- `VITE_REDIRECT_URI=https://YOUR_NETLIFY_SITE.netlify.app`

3️⃣ **Despliega automáticamente en Netlify! 🚀**

---

## 📚 Estructura del Proyecto

```sh
📦 spotify-queue
├── 📂 src
│   ├── 📂 components       # Componentes reutilizables
│   ├── 📂 pages            # Páginas de la aplicación
│   ├── 📂 hooks            # Hooks personalizados (autenticación, cola, etc.)
│   ├── 📂 assets           # Imágenes, iconos, etc.
│   ├── 📜 main.jsx         # Archivo principal
│   └── 📜 App.jsx          # Enrutamiento y estructura principal
├── 📜 .env.example         # Variables de entorno (ejemplo, NO SUBIR `.env` real)
├── 📜 README.md            # Documentación del proyecto
├── 📜 package.json         # Dependencias y scripts
└── 📜 tailwind.config.js   # Configuración de Tailwind CSS
```

---

## 🔍 Comparación de LLMs Utilizados 🤖

Para la implementación de este proyecto, se utilizaron **diferentes LLMs (Modelos de Lenguaje Grande)** para evaluar su desempeño en la resolución del problema:

| Modelo Utilizado | Experiencia |
|-----------------|-------------|
| **V0 Dev Chat** | No fue útil, se enfocó demasiado en el diseño y generó código desorganizado. Requiso demasiado esfuerzo manual para corregirlo. |
| **ChatGPT** | Ofreció una experiencia fluida, mantuvo el contexto del proyecto y permitió una implementación estructurada, facilitando la separación de responsabilidades. |
| **DeepSeek** | No se pudo probar debido a que el servidor estaba saturado. |

🔍 **Conclusión:** *ChatGPT fue el modelo que mejor se adaptó a la necesidad del proyecto, asegurando coherencia en el desarrollo.*

---

## 📜 Licencia
Este proyecto se distribuye con fines educativos 

📌 **Creado por Alejandro Osorio.** 🚀🔥

