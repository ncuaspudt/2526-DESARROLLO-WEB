// Referencias
const form = document.getElementById("registroform");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");

const btnEnviar = document.getElementById("btnEnviar");
const btnReset = document.getElementById("btnReset");
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
    const value = password.value.trim();
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (value.length === 0) {
        marcarInvalido(password, passwordError, "La contraseña es obligatoria");
        btnEnviar.disabled = true;
        return false;
    }
    if (!passRegex.test(value)) {
        marcarInvalido(password, passwordError, "La contraseña debe tener al menos 8 caracteres, un número y un carácter especial");
        btnEnviar.disabled = true;
        return false;
    }
    marcarValido(password, passwordError);
    return true;
}
// Función validar confirmación de contraseña
function validarConfirmarContraseña() {
    const value = confirmPassword.value.trim();
    if (value !== password.value) {
        marcarInvalido(confirmPassword, confirmPasswordError, "Las contraseñas no coinciden");
        btnEnviar.disabled = true;
        return false;
    }
    marcarValido(confirmPassword, confirmPasswordError);
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
// Validar todo el formulario
function validarFormulario() {
    const valido =
        validarNombre() &&
        validarEmail() &&
        validarContraseña() &&
        validarConfirmarContraseña() &&
        validarEdad();

    btnEnviar.disabled = !valido;
}

//evento en tiempo real
nombre.addEventListener("input", validarNombre);
email.addEventListener("input", validarEmail);
password.addEventListener("input", validarContraseña);
confirmPassword.addEventListener("input", validarConfirmarContraseña);
edad.addEventListener("input", validarEdad);

btnEnviar.addEventListener("click", validarFormulario);
btnReset.addEventListener("click", () => {
    form.reset();
    btnEnviar.disabled = true;
});

// Envío del formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();
    mensajeExito.textContent = "Formulario enviado correctamente ✅";
    form.reset();
    btnEnviar.disabled = true;
});