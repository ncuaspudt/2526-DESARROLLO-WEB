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
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;

    if (value.length === 0) {
        marcarInvalido(nombre, nombreError, "El nombre es obligatorio");
        btnEnviar.disabled = true;
        return false;
    }

    if (!nombreRegex.test(value)) {
        marcarInvalido(nombre, nombreError, "Mínimo 3 letras, sin números");
        btnEnviar.disabled = true;
        return false;
    }

    marcarValido(nombre, nombreError);
    return true;
}

// Función validar email
function validarEmail() {
    const value = email.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (value.length === 0) {
        marcarInvalido(email, emailError, "El correo electrónico es obligatorio");
        btnEnviar.disabled = true;
        return false;
    }
    if (!emailRegex.test(value)) {
        marcarInvalido(email, emailError, "Formato de correo inválido. Ej: ejemplo@dominio.com");
        btnEnviar.disabled = true;
        return false;
    }
    marcarValido(email, emailError); // Si es válido, se puede llamar a la función marcarValido
    return true;
}
// Función validar contraseña
function validarContraseña() {
    const value = contraseña.value.trim();
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (value.length === 0) {
        marcarInvalido(contraseña, contraseñaError, "La contraseña es obligatoria");
        btnEnviar.disabled = true;
        return false;
    }
    if (!passRegex.test(value)) {
        marcarInvalido(contraseña, contraseñaError, "La contraseña debe tener al menos 8 caracteres, un número y un carácter especial");
        btnEnviar.disabled = true;
        return false;
    }
    marcarValido(contraseña, contraseñaError);
    return true;
}
// Función validar confirmación de contraseña
function validarConfirmarContraseña() {
    const value = confirmarContraseña.value.trim();
    if (value !== contraseña.value) {
        marcarInvalido(confirmarContraseña, confirmarContraseñaError, "Las contraseñas no coinciden");
        btnEnviar.disabled = true;
        return false;
    }
    marcarValido(confirmarContraseña, confirmarContraseñaError);
    return true;
}
// Función validar edad
function validarEdad() {
    const value = edad.value.trim();
    if (value < 18) {
        marcarInvalido(edad, edadError, "Debes ser mayor de 18 años");
        btnEnviar.disabled = true;
        return false;
    }
    marcarValido(edad, edadError);
    return true;
}
// Función que valida todo el formulario
function validarFormulario() {
    const isNombreValido = validarNombre();
    const isEmailValido = validarEmail();
    const isContraseñaValida = validarContraseña();
    const isConfirmarContraseñaValida = validarConfirmarContraseña();
    const isEdadValida = validarEdad();

    // Si todos son válidos, habilitar el botón de enviar
    if (isNombreValido && isEmailValido && isContraseñaValida && isConfirmarContraseñaValida && isEdadValida) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

//evento en tiempo real
nombre.addEventListener("input", validarNombre);
email.addEventListener("input", validarEmail);
contraseña.addEventListener("input", validarContraseña);
confirmarContraseña.addEventListener("input", validarconfirmarContraseña);
edad.addEventListener("input", validarEdad);