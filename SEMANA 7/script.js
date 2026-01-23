// Referencias
const productlist = document.getElementById("productlist");
const btnAgregar = document.getElementById("btnAgregar");
// Arreglo que almacenará los productos
const productos = [
    { nombre: "Arroz", precio: "$10", descripcion: "10 libras de arroz" },
    { nombre: "Fréjol", precio: "$20", descripcion: "10 libras de frejol" },
    { nombre: "Maíz", precio: "$30", descripcion: "10 libras maiz" }
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
        nombre: "Producto 4",
        precio: "$30",
        descripcion: "10 libras de maicena"
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
