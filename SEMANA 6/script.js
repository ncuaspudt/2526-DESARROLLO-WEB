// Referencias
const form = document.getElementById("registroform");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");

const btnEnviar = document.getElementById("btnEnviar");
const mensajeExito = document.getElementById("mensajeExito");

//Errores
const nombreError = document.getElementById("nombreError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const edadError = document.getElementById("edadError");

// Función marcar inválido
function marcarInvalido(input, errorElement, mensaje) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    errorElement.textContent = mensaje;

}
// Funcion validar nombre
function validarNombre() {
    const value = nombre.value.trim();
    const nombreRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (value.length === 0) {
        marcarInvalido(nombre, nombreError, "El email es obligatorio");
        btnEnviar.disabled = true;
        return false;
    }
    if (!nombreRegex.test(value)) {
        marcarInvalido(nombre, nombreError, "Formato inválido. Ej: "+"@gmail.com");
        btnEnviar.disabled = true;
        return false;
    }
}
//evento en tiempo real
nombre.addEventListener("input", validarNombre);













// Función validar nombre


// Expresiones regulares
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
//Al menos 8 caracteres, mínimo 1 número y 1 carácter especial
const passwordRegex =  /^(?=.*\d)(?=.*[!@#$%^´&*()_\-+=\[\]{};:"",.<>/?\\|'~]).{8,}$/;


// Validacion de correo 
const emailInput = document.getElementById("email");
const feedback = document.getElementById("feedback");
emailInput.addEventListener("input", () => {
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (emailPattern.test(emailInput.value)) {
feedback.textContent = "Correo válido";
feedback.style.color = "green";
} else {
feedback.textContent = "Correo no válido";
feedback.style.color = "red";
}
});
