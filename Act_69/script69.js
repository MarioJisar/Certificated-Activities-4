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
  {
    link: "K0Fr7n19SPU",
    titulo: "Teaser #1 - Captain America",
  },
  {
    link: "CijeC0RTpbA",
    titulo: "Teaser #2 - Thor",
  },
  {
    link: "5cSQQzBufao",
    titulo: "Teaser #3 - X-Men",
  },
  {
    link: "Ikd3NSMY058",
    titulo: "Teaser #4 - Wakanda / Fantastic Four",
  },
];

let divTrailers = "";
let divImagenes = "";

for (let cont = 0; cont < media.length; cont++) {
  divTrailers += `<div>
                    <iframe height="250" width="450" src="https://www.youtube.com/embed/${media[cont].link}" frameborder="0"></iframe>
                    <p>${media[cont].titulo}</p>
                  </div>`;

  divImagenes += `<div>
                    <a href="https://www.youtube.com/watch?v=${media[cont].link}" target="_blank">
                      <img src="https://img.youtube.com/vi/${media[cont].link}/maxresdefault.jpg">
                    </a>
                    <p>${media[cont].titulo}</p>
                  </div>`;
}

document.getElementById("trailers").innerHTML = divTrailers;
document.getElementById("imagenes").innerHTML = divImagenes;
