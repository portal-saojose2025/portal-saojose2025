// Carregar fotos automaticamente
document.addEventListener("DOMContentLoaded", () => {
  const fotosContainer = document.getElementById("galeria-fotos");
  const videosContainer = document.getElementById("galeria-videos");

  const fotos = ["capa.jpg"]; // Aqui será automático no servidor real
  fotos.forEach(foto => {
    let img = document.createElement("img");
    img.src = `images/${foto}`;
    img.alt = "Foto de São José do Gorutuba";
    img.style.maxWidth = "200px";
    img.style.margin = "10px";
    fotosContainer.appendChild(img);
  });

  const videos = []; // Lista simulada
  videos.forEach(video => {
    let vid = document.createElement("video");
    vid.src = `videos/${video}`;
    vid.controls = true;
    vid.style.maxWidth = "300px";
    vid.style.margin = "10px";
    videosContainer.appendChild(vid);
  });
});
