// Referencias-DOM
const productlist = document.getElementById("productlist");
const btnAgregar = document.getElementById("btnAgregar");
const formContact = document.getElementById("contactForm");
const alertButton = document.getElementById("alertButton");

// Arreglo de productos
const productos = [
    { nombre: "Tablet", precio: "$200", descripcion: "Dispositivo electrónico portátil con una pantalla táctil grande." },
    { nombre: "Laptop", precio: "$600", descripcion: "Contiene teclado, panel táctil (touchpad), altavoces." },
    { nombre: "Auriculares", precio: "$30", descripcion: "Reciben señales eléctricas de un equipo de audio." }
];

// Función para mostrar los productos en la tabla
function renderizarProductos() {
    productlist.innerHTML = ""; // Limpiar la tabla

    productos.forEach(producto => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.descripcion}</td>
        `;
        productlist.appendChild(tr);
    });
}

// Llamar a la función para mostrar los productos iniciales
renderizarProductos();

// Función para agregar un nuevo producto (de ejemplo)
function agregarProducto() {
    const nuevoProducto = {
        nombre: "Parlantes",
        precio: "$700",
        descripcion: "Dispositivo electroacústico."
    };

    productos.push(nuevoProducto);
    renderizarProductos();
}

// Evento para agregar producto
btnAgregar && btnAgregar.addEventListener("click", agregarProducto);

// Validación del formulario de contacto
formContact.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar que se envíe el formulario

    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("message").value;

    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Formulario enviado correctamente.");
    }
});

// Botón de alerta
alertButton.addEventListener("click", () => {
    alert("¡Gracias por visitar nuestra página web!");
});
