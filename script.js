// Credenciales válidas
const validCredentials = {
    username: "omar",
    password: "1005524926"
};

// Función de validación
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener valores de los campos
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar credenciales
    if (username === validCredentials.username && password === validCredentials.password) {
        // Redirigir a otra página
        window.location.href = "dashboard.html";
    } else {
        // Mostrar mensaje de error
        document.getElementById("errorMsg").textContent = "Usuario o contraseña incorrectos.";
    }
});
