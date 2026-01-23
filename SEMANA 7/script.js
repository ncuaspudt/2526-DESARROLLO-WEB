// Arreglo que almacenará los productos
const productos = [
    { nombre: "Producto 1", precio: "$10", descripcion: "Descripción del Producto 1" },
    { nombre: "Producto 2", precio: "$20", descripcion: "Descripción del Producto 2" },
    { nombre: "Producto 3", precio: "$30", descripcion: "Descripción del Producto 3" }
];

// Referencia al elemento <ul> donde se mostrarán los productos
const productList = document.getElementById("product-list");

// Función para mostrar la lista de productos
function renderizarProductos() {
    // Limpia la lista antes de agregar los nuevos productos
    productList.innerHTML = "";

    // Itera sobre los productos y los agrega al <ul>
    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: ${producto.precio}<br>
            ${producto.descripcion}
        `;
        productList.appendChild(li);
    });
}

// Llama a la función para mostrar los productos cuando cargue la página
renderizarProductos();

// Función para agregar un nuevo producto
function agregarProducto() {
    // Crea un nuevo producto con valores simples
    const nuevoProducto = {
        nombre: "Nuevo Producto",
        precio: "$50",
        descripcion: "Descripción de un nuevo producto"
    };

    // Agrega el nuevo producto al arreglo
    productos.push(nuevoProducto);

    // Vuelve a renderizar la lista
    renderizarProductos();
}

// Evento para el botón de agregar producto
document.getElementById("add-product-btn").addEventListener("click", agregarProducto);
