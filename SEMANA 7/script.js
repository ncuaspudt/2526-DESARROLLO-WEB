// Referencias-DOM
const productlist = document.getElementById("productlist");
const btnAgregar = document.getElementById("btnAgregar");
// Arreglo que almacenará los productos
const productos = [
    { nombre: "Tablet", precio: "$200", descripcion: "Dispositivo electrónico portátil con una pantalla táctil grande" },
    { nombre: "Laptop", precio: "$600", descripcion: "Contiene teclado, panel táctil (touchpad), altavoces " },
    { nombre: "Auriculares", precio: "$30", descripcion: "Reciben señales eléctricas de un equipo de audio" }
];


// Función para mostrar la lista de productos
function renderizarProductos() {
    // Limpia la lista 
    productlist.innerHTML = "";

    // Itera sobre los productos
    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: ${producto.precio}<br>
            ${producto.descripcion}
        `;
        productlist.appendChild(li);
    });
}

// Llama a la función 
renderizarProductos();

// Función para agregar un nuevo producto
function agregarProducto() {
    // Crea un nuevo producto 
    const nuevoProducto = {
        nombre: "Parlantes",
        precio: "$700",
        descripcion: "Dispositivo electroacústico"
    };

    // Agrega el nuevo producto al arreglo
    productos.push(nuevoProducto);

    // Vuelve a renderizar la lista
    renderizarProductos();
}

// Evento para el botón de agregar producto
btnAgregar.addEventListener("click", () => {
    agregarProducto();
});
