//Ejecucion del primer script cuando se clickea
document.getElementById('first').onclick = function() {
    //  Defino las variables 

    let number;
    let cont = 1;
    var suma = 0;
    var promedio;

    //  While que solicita 5 numeros y opera

    while (cont <= 5) {
        if (cont === 1) {
            number = prompt("Ingrese un numero");
            number = parseFloat(number);
            suma = suma + number;
        } else {
            number = prompt("Ingrese otro numero");
            number = parseFloat(number);
            suma = suma + number;
        }
        promedio = suma / cont;
        cont = cont + 1;
    }


    //  Alertas para informar al usuario

    alert("La suma total de sus numeros es: " + suma);
    alert("El promedio de sus numeros es: " + promedio);
}

//  Ejecucion del segundo script cuando se clickea
document.getElementById('second').onclick = function() {
    //  Defino las variables
    var cont = 0;
    var edad;

    // Funcion que define si es mayor de edad
    function conteoMayores(edad) {
        if (edad >= 18) {
            return 1;
        } else {
            return 0;
        }
    }

    //  Aviso informativo
    alert("Cuando se desee terminar el ciclo ingresar un 0");

    //  Do while que pide las edades y opera
    do {
        edad = prompt("Ingrese la edad");
        edad = parseInt(edad);
        cont = cont + conteoMayores(edad);
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

    //  Funcion para sacar promedio
    function promedio(number, cantidad) {
        suma = suma + number;
        prom = suma / cantidad;
        return prom;
    }
    //  Alerta informativa
    alert("Si desea terminar la operación por favor teclear la palabra: salir");

    //  While que se rompe al ingresar "salir" 
    while (true) {
        number = prompt("Ingresar un numero o salida");
        number = number.toLowerCase();
        // If para romper el while
        if (number != "salir") {
            number = parseInt(number);
            // If para definir si es de un solo digito
            if (number < 10 && number >= 0) {
                cantidad = cantidad + 1;
                prom = promedio(number, cantidad);
            }
        } else {
            if (prom != undefined) {
                alert("El promedio es " + prom);
            } else {
                alert("No has ingresado ningun numero de un digito");
            }
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

    //  Alerta informativa
    alert("IMPORTANTE: evitar ingresar el 0 si no desea terminar el conteo");

    //  while que se rompe al ingresar 0
    while (true) {
        number = prompt("Ingrese un numero (Recuerde que para finalizar el script ingresar 0)");
        //  Condicional que finaliza el while 
        if (number != "0") {
            // If que verifica que tenga al menos un numero
            if (Number.isNaN(number)) {
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
    let number;
    let letter;

    // Ingreso del numero
    number = prompt("Ingresar un numero del 1 al 10");

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