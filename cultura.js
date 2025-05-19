document.addEventListener("DOMContentLoaded", function () {
  const videos = ["videos/20250519_084737[1].mp4"];
  const videoPlayer = document.getElementById("videoPlayer");

  function obtenerVideoAleatorio(excluirActual) {
    let nuevo;
    do {
      nuevo = videos[Math.floor(Math.random() * videos.length)];
    } while (nuevo === excluirActual && videos.length > 1);
    return nuevo;
  }

  let videoActual = obtenerVideoAleatorio(null);
  videoPlayer.src = videoActual;

  videoPlayer.addEventListener("loadedmetadata", () => {
    videoPlayer.play().catch(error => console.log("Autoplay bloqueado:", error));
  });

  videoPlayer.addEventListener("ended", () => {
    videoActual = obtenerVideoAleatorio(videoActual);
    videoPlayer.src = videoActual;
    videoPlayer.play();
  });

  // **Pantalla completa al cargar**
  document.documentElement.requestFullscreen();
});
