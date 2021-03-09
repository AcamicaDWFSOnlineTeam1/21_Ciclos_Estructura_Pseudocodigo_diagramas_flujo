//Ejecucion del primer script cuando se clickea
document.getElementById('first').onclick = function() {
    // Defino variables
    let number;
    let cont = 1;
    let suma = 0;
    let prom;

    //  Funcion que suma
    function sumatoria(number) {
        suma = suma + number;
        return suma;
    }

    //  Funcion para sacar promedio
    function promedio(suma, cont) {
        prom = suma / cont;
        return prom;
    }

    //  Funcion que valida si es un numero
    function validacionNumero(number) {
        while (isNaN(number)) {
            number = prompt("Ingresa de nuevo, lo que has ingresado no es un numero");
        }
        number = parseFloat(number);
        return number;
    }

    //  While que solicita 5 numeros y opera

    while (cont <= 5) {
        if (cont === 1) {
            number = prompt("Ingrese un numero");
            number = validacionNumero(number);
            suma = sumatoria(number);
        } else {
            number = prompt("Ingrese otro numero");
            number = validacionNumero(number);
            suma = sumatoria(number);
        }
        prom = promedio(suma, cont);
        cont = cont + 1;
    }


    //  Alertas para informar al usuario

    alert("La suma total de sus numeros es: " + suma);
    alert("El promedio de sus numeros es: " + prom);
}

//  Ejecucion del segundo script cuando se clickea
document.getElementById('second').onclick = function() {
    // Defino variables
    let edad;
    let cont = 0;

    // Funcion que aumenta el contador si es mayor de edad
    function conteoMayores(edad, cont) {
        if (edad >= 18) {
            cont = cont + 1;
        }
        return cont;
    }

    //  Funcion que valida que si sea un numero
    function validacionNumero(edad) {
        while (isNaN(edad)) {
            edad = prompt("Ingresa de nuevo, lo que has ingresado no es un dato valido (Recuerda ingresar solo numeros)");
        }
        edad = parseInt(edad);
        return edad;
    }

    //  Aviso informativo
    alert("Cuando se desee terminar el ciclo ingresar un 0");

    //  Do while que pide las edades y opera
    do {
        edad = prompt("Ingrese la edad");
        edad = parseInt(validacionNumero(edad));
        //edad = parseInt(edad);
        cont = conteoMayores(edad, cont);
    } while (edad != 0);

    //  Alerta para informar resultado 
    alert("La cantidad de personas que son mayores de edad es " + cont);
}

//  Ejecucion del tercer script cuando se clickea
document.getElementById('third').onclick = function() {
    //  Defino variables
    let number;
    let suma = 0;
    let cantidad = 0;
    let prom;
    let alerta;

    //  Funcion para sacar promedio
    function promedio(number, cantidad) {
        suma = suma + number;
        prom = suma / cantidad;
        return prom;
    }

    //  Funcion que valida si es un numero
    function validacionNumero(number) {
        while (isNaN(number)) {
            number = number.toLowerCase();
            if (number == "salir") {
                return number;
            } else {
                number = prompt("Ingresa de nuevo, lo que has ingresado no es un numero.\nEn caso de querer terminar ingresar la palabra salir");
            }
        }
        number = parseInt(number);
        return number;
    }

    function alertaSalida(prom) {
        if (prom != undefined) {
            alerta = "El promedio es " + prom;
        } else {
            alerta = "No has ingresado ningun numero de un digito";
        }
        return alerta;
    }

    //  Alerta informativa
    alert("Si desea terminar la operación por favor teclear la palabra: salir");

    //  While que se rompe al ingresar "salir" 
    while (true) {
        number = prompt("Ingresar un numero o salida");
        number = number.toLowerCase();
        // If para romper el while
        if (number != "salir") {
            number = validacionNumero(number);
            if (number == "salir") {
                alert(alertaSalida(prom));
                break;
            }
            if (number < 10 && number >= 0) {
                cantidad = cantidad + 1;
                prom = promedio(number, cantidad);
            }
        } else {
            alert(alertaSalida(prom));
            break;
        }
    }
}

//  Ejecucion del cuarto script cuando se clickea
document.getElementById('fourth').onclick = function() {
    //  Defino variables
    let number;
    let type;
    var contImpar = 0;
    var contPar = 0;

    //  Funcion que permite determinar si el numero ingresado es par o impar
    function typeOfNumber(number) {
        if ((number % 2) == 0) {
            type = "par";
        } else {
            type = "impar";
        }
        return type;
    }

    //  Funcion que valida que si sea un numero
    function validacionNumero(number) {
        while (isNaN(number)) {
            number = prompt("Ingresa de nuevo, lo que has ingresado no es un dato valido (Recuerda ingresar solo numeros).\nPara salir ingresa 0.");
        }
        number = parseInt(number);
        return number;
    }

    //  Alerta informativa
    alert("IMPORTANTE: evitar ingresar el 0 si no desea terminar el conteo");

    //  while que se rompe al ingresar 0
    while (true) {
        number = prompt("Ingrese un numero (Recuerde que para finalizar el script ingresar 0)");
        //  Condicional que finaliza el while 
        if (number != "0") {
            number = validacionNumero(number);
            if (number == 0) {
                break;
            }
            number = parseInt(number);
            type = typeOfNumber(number);
            // Switch que suma los contadores
            switch (type) {
                case "par":
                    contPar = contPar + 1;
                    break;
                case "impar":
                    contImpar = contImpar + 1;
                    break;
            }

        } else {
            break;

        }
    }

    //  Condicional para determinar el alert a mostrar
    if (contPar > contImpar) {
        alert("Los números pares tuvieron una mayor cantidad de ingresos con un total de " + contPar);
    } else if (contImpar > contPar) {
        alert("Los números impares tuvieron una mayor cantidad de ingresos con un total de " + contImpar);
    } else {
        alert("Tanto los números pares como impares tuvieron la misma cantidad de ingresos ");
    }

}

//  Ejecucion del quinto script cuando se clickea
document.getElementById('fiveth').onclick = function() {
    // Defino variables
    let number;
    let letter;

    // Funcion que valida que si es un numero
    function validacionNumero(number) {
        while (isNaN(number)) {
            number = prompt("Ingresa de nuevo, lo que has ingresado no es un numero");
        }
        return number;
    }

    // Ingreso del numero
    number = prompt("Ingresar un numero del 1 al 10");
    number = validacionNumero(number);

    //  Funcion que transforma los numeros
    function transform(number) {
        switch (number) {
            case "1":
                letter = "La letra equivalente al numero digitado es a";
                break;
            case "2":
                letter = "La letra equivalente al numero digitado es b";
                break;
            case "3":
                letter = "La letra equivalente al numero digitado es c";
                break;
            case "4":
                letter = "La letra equivalente al numero digitado es d";
                break;
            case "5":
                letter = "La letra equivalente al numero digitado es e";
                break;
            case "6":
                letter = "La letra equivalente al numero digitado es f";
                break;
            case "7":
                letter = "La letra equivalente al numero digitado es g";
                break;
            case "8":
                letter = "La letra equivalente al numero digitado es h";
                break;
            case "9":
                letter = "La letra equivalente al numero digitado es i";
                break;
            case "10":
                letter = "La letra equivalente al numero digitado es j";
                break;
            default:
                letter = "Se ha cometido un error";
        }
        return letter;
    }

    //  Alerta del resultado
    alert(transform(number));
}