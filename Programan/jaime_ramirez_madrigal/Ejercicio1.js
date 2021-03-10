
let suma = 0;
let ingreso = 0;

for (let i = 5; i > 0; i--) {
    ingreso = prompt("Ingrese un número");
    ingreso = parseInt(ingreso);
    suma = suma + ingreso;
}

console.log("La suma total es: " + suma);