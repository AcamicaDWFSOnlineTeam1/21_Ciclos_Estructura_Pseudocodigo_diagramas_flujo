let numero = 0, suma = 0, contador = 0, otro, promedioFinal;

function promedio(sumar, contar) {
    promedioFinal = sumar / contar;
    return promedioFinal;
}

do {
    //debugger;
    numero = prompt("Ingrese un número");
    otro = numero;
    numero = parseInt(numero);
    if (numero < 10 && numero >= 0) {
        suma += numero;
        contador++;
    }
} while (otro !== "salir");



alert("El promedio de los números ingresados de 1 dígito es: " + promedio(suma, contador));