// Traer los elementos del DOM.
const inputUrl = document.getElementById("inputUrl");
const botonCargar = document.getElementById("btnAgregar");
const imagen = document.getElementById("imagen");

let imagenSeleccionada = null;
// Función para agregar un anueva imagen 
function agregarImagen()
const url = inputUrl.value;
if (url) {
    const nuevaImagen = document.createElement("img");
    nuevaImagen.src= url;
    nuevaImagen.classList.add("imagen-galería");
    nuevaImagen.addEventListener("click", () => seleccionarImagen);
    galeria.appendChild(nuevaImagen);
    inputUrl.value = "";
}