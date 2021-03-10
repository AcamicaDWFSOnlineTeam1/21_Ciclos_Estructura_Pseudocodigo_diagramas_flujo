let edad = 0, cantidadMayoresDeEdad = 0;

function validacionMayorEdad(laedad) {
    if (laedad >= 18) {
        return 1;
    }
    return 2;
}

function validacion(x) {
    if (isNaN(x)) {
        return 1;
    }
    return 2;
}

do {
    edad = prompt("Ingrese la edad");
    edad = parseInt(edad);
    if (validacion(edad) == 2 && validacionMayorEdad(edad) == 1) {
        cantidadMayoresDeEdad++;
    }
    else if (validacion(edad) == 1) {
        alert("El valor ingresado no es un número");
        edad = "null";
    }
} while (!edad == 0);

alert("La cantidad de Personas Mayores de edad es de " + cantidadMayoresDeEdad);