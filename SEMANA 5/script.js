// Traer elementos del DOM
const inputUrl = document.getElementById("inputUrl");
const botonCargar = document.getElementById("btnAgregar");
const botonEliminar = document.getElementById("btnEliminar");
const galeria = document.getElementById("galeria");

let imagenSeleccionada = null;

// Eventos
botonCargar.addEventListener("click", agregarImagen);
botonEliminar.addEventListener("click", eliminarImagen);

// Función para agregar imagen
function agregarImagen() {
    const url = inputUrl.value;
    if (url) {
        crearImagen(url);
        inputUrl.value = "";
    }
}

// Función para crear la imagen y agregarla al DOM
function crearImagen(url) {
    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = url;
    nuevaImagen.classList.add("imagen-galeria");
    nuevaImagen.addEventListener("click", () => seleccionarImagen(nuevaImagen));
    galeria.appendChild(nuevaImagen);
}

// Función para seleccionar imagen
function seleccionarImagen(imagen) {
    if (imagenSeleccionada) {
        imagenSeleccionada.classList.remove("seleccionada");
    }
    imagenSeleccionada = imagen;
    imagenSeleccionada.classList.add("seleccionada");
}

// Función para eliminar imagen seleccionada
function eliminarImagen() {
    if (imagenSeleccionada) {
        imagenSeleccionada.remove();
        imagenSeleccionada = null;
    } else {
        alert("No hay ninguna imagen seleccionada");
    }
}
