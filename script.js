// Carregar imagens automaticamente
const carouselContainer = document.getElementById('carousel');
const imagens = ['imagens/exemplo1.jpg', 'imagens/exemplo2.jpg', 'imagens/exemplo3.jpg'];
let index = 0;

function mostrarImagem() {
  carouselContainer.innerHTML = `<img src="${imagens[index]}" alt="Foto ${index+1}">`;
  index = (index + 1) % imagens.length;
}

setInterval(mostrarImagem, 3000);
mostrarImagem();

// Carregar vídeos automaticamente
const videoGallery = document.getElementById('videoGallery');
const videos = ['videos/exemplo1.mp4', 'videos/exemplo2.mp4'];

videos.forEach(video => {
  const vid = document.createElement('video');
  vid.src = video;
  vid.controls = true;
  videoGallery.appendChild(vid);
});
