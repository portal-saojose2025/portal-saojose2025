// Carregar fotos automaticamente
async function carregarFotos() {
  const fotosContainer = document.getElementById("fotos");
  const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"]; // adicione mais nomes
  fotos.forEach(foto => {
    const img = document.createElement("img");
    img.src = "images/" + foto;
    fotosContainer.appendChild(img);
  });
}

// Carregar vídeos automaticamente
async function carregarVideos() {
  const videosContainer = document.getElementById("videos-container");
  const videos = ["video1.mp4", "video2.mp4"]; // adicione mais nomes
  videos.forEach(video => {
    const vid = document.createElement("video");
    vid.src = "videos/" + video;
    vid.controls = true;
    videosContainer.appendChild(vid);
  });
}

window.onload = () => {
  carregarFotos();
  carregarVideos();
};