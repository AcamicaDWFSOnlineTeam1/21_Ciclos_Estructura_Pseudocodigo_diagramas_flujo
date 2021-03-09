
let numero = 0, valor = 0;

function convertidor(num) {
    switch (num) {
        case 1:
            valor = "a";
            alert("El " + num + " es igual a: " + valor);
            break;
        case 2:
            valor = "b";
            alert("El " + num + " es igual a: " + valor);
            break;
        case 3:
            valor = "c";
            alert("El " + num + " es igual a: " + valor);
            break;
        case 4:
            valor = "d";
            alert("El " + num + " es igual a: " + valor);
            break;
        case 5:
            valor = "e";
            alert("El " + num + " es igual a: " + valor);
            break;
        case 6:
            valor = "f";
            alert("El " + num + " es igual a: " + valor);
            break;
        case 7:
            valor = "g";
            alert("El " + num + " es igual a: " + valor);
            break;
        case 8:
            valor = "h";
            alert("El " + num + " es igual a: " + valor);
            break;
        case 9:
            valor = "i";
            alert("El " + num + " es igual a: " + valor);
            break;
        case 10:
            valor = "j";
            alert("El " + num + " es igual a: " + valor);
            break;
        default:
            alert("Perdón, no conozco esa operación");
    }
}

numero = prompt("Ingrese un número");
numero = parseInt(numero);

if (0 <= numero <= 10) {
    convertidor(numero);
} else {
    alert("Perdón, no conozco esa operación");
}