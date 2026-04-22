setTimeout(() => {
  const boton = document.getElementById("boton");
  const audio = document.getElementById("audio");

  boton.addEventListener("click", activar);
  function activar() {
    if (audio.paused) {
      audio.play();
      boton.textContent = "🔇DESACTIVAR SONIDO🔇";
    } else {
      audio.pause();
      boton.textContent = "🔊ACTIVAR SONIDO🔊";
    }
  }

  // boton.onclick = () => {
  //     audio.paused ? (audio.play(), boton.textContent = "DESCATIVAR AUDIO") : (audio.pause(), boton.textContent = "ACTIVAR AUDIO");
  // }

  // boton.addEventListener('click', function() {
  //     if (audio.paused) {
  //         audio.play();
  //         boton.textContent = 'DESACTIVAR SONIDO';
  //     } else {
  //         audio.pause();
  //         boton.textContent = 'ACTIVAR SONIDO';
  //     }
  // });

  const media = [
    ["K0Fr7n19SPU", "Teaser #1 - Captain America"],
    ["CijeC0RTpbA", "Teaser #2 - Thor"],
    ["5cSQQzBufao", "Teaser #3 - X-Men"],
    ["Ikd3NSMY058", "Teaser #4 - Wakanda / Fantastic Four"],
  ];

  let divTrailers = "";
  let divImagenes = "";

  for (let objeto of media) {
    let link = objeto[0];
    let titulo = objeto[1];
    divTrailers += `<div>
                      <iframe height="250" width="450" src="https://www.youtube.com/embed/${link}" frameborder="0"></iframe>
                      <p>${titulo}</p>
                    </div>`;

    divImagenes += `<div>
                      <a href="https://www.youtube.com/watch?v=${link}" target="_blank">
                        <img src="https://img.youtube.com/vi/${link}/maxresdefault.jpg" alt="${titulo}">
                      </a>
                      <p>${titulo}</p>
                    </div>`;
  }

  document.getElementById("trailers").innerHTML = divTrailers;
  document.getElementById("imagenes").innerHTML = divImagenes;
}, 1000);
