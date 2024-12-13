
fetch('../../clases.json')
  .then(response => response.json())
  .then(data => {
    
    data.forEach(clase => {
      const video = document.createElement('video');
      video.classList.add('videoPostado')
      video.autoplay = true;
      video.loop = true;
      video.preload = true;
      video.src = clase.link;
      video.controls = true;
        
      const containerClases = document.getElementById('clases-container')
      const videoClase = document.createElement('div')
      videoClase.classList.add('videoAula')

      videoClase.innerHTML = `<h3>${clase.titulo}</h3><p>Duración: ${clase.duracion}</p>`;
      videoClase.appendChild(video);

      containerClases.appendChild(videoClase);
    });
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });