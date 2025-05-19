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

  videoPlayer.addEventListener("ended", () => {
    videoActual = obtenerVideoAleatorio(videoActual);
    videoPlayer.src = videoActual;
    videoPlayer.play();
  });

  // **Pantalla completa al cargar**
  videoPlayer.addEventListener("loadedmetadata", () => {
    const fullscreenElement = document.documentElement;
    if (fullscreenElement.requestFullscreen) {
      fullscreenElement.requestFullscreen();
    }
  });
});
