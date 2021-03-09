
let suma = 0, ingreso = 0, cantidad = 5;

function validacion(x) {
    if (isNaN(x)) {
        return 1;
    }
    return 2;
}

for (let i = cantidad; i > 0; i--) {
    ingreso = prompt("Ingrese un número");
    ingreso = parseInt(ingreso);
    if (validacion(ingreso) == 2) {
        suma += ingreso;
    }
    else {
        alert("El valor ingreasdo no es un número");
        i++;
    }
}

alert("La suma total es: " + suma);
alert("El promedio es: " + suma / cantidad);

