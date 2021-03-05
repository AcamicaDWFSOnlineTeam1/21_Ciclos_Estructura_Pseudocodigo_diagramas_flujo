// Datos del usuario con los que comparar input
// Declarar variables necesarias
// Inicializar variables si es necesari

let usuario;
let password;

// Pedir al usuario la información requerida
// Almacenas los valores en la variables declaradas anteriormente



// Validar los valores de las variables
// Crear función para validar los datos de entrada


// Repertir las intrucciones anteriores mientras no son
// validos los datos de entrada con la ayuda de la función
// para validar los datos

//Diana

//Alzate 

do {
    debugger;
    usuario = prompt("Ingresa tu usuario");
    password = prompt("Ingresa tu contraseña");
} while (!validarDatos(usuario, password));

function validarDatos(usuario, password) {
    let datosCorrectos = false;
    if (usuario == "acamica" && password == "123") {
        datosCorrectos = true;
    } else {
        alert("Datos incorrectos");
    }
    return datosCorrectos;
}