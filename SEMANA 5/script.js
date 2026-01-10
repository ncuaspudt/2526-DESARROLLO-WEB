// Traer los elementos del DOM.
const inputUrl = document.getElementById("inputUrl");
const botonCargar = document.getElementById("btnAgregar");
const galeria = document.getElementById("galeria");

let imagenSeleccionada = null;
// Función para agregar un anueva imagen 
function agregarImagen() {
const url = inputUrl.value;
if (url) {
    const nuevaImagen = document.createElement("img");
    nuevaImagen.src= url;
    nuevaImagen.classList.add("imagen-galeria");
    nuevaImagen.addEventListener("click", () => seleccionarImagen);
    galeria.appendChild(nuevaImagen);
    inputUrl.value = "";
}
}
// Función para seleccionar una imagen
function seleccionarImagen (imagen) {
       if  (imagenSeleccionada) {
            imagenSeleccionada.classList.remove("seleccionada");
       }

       imagenSeleccionada = imagen;
       imagenSeleccionada.classList.add("seleccionada");
}