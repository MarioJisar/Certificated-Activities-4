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
