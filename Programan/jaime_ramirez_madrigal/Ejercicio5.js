
let numero = 0, suma = 0, contadorPar = 0, contadorImpar = 0;

function parOimpar(num) {
    if (num % 2 == 0) {
        return 2;
    } else {
        return 1;
    }
}

do {
    //debugger;
    numero = prompt("Ingrese un número");
    numero = parseInt(numero);
    if (numero !== 0) {
        if (parOimpar(numero) == 2) {
            contadorPar++;
        }
        else {
            contadorImpar++;
        }
    }
} while (numero !== 0);

if (contadorImpar < contadorPar) {
    alert("Los números pares tuvieron más Ingresos");
} else if (contadorImpar > contadorPar) {
    alert("Los números impares tuvieron más Ingresos");
} else {
    alert("Los números impares tuvieron los mismos Ingresos que los pares");
}
