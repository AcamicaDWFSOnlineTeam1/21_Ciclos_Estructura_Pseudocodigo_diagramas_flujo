let ejercicio = parseInt(prompt('Escriba el numero del ejecicio a realizar: \n 1--> Sumemos \n 2--> Promedio \n 3--> Edades \n 4--> Promedio condicional \n 5--> Pares e impares \n 6--> De numero a letras'));

switch (ejercicio) {
    case 1:
        let suma  = 0;
        for (let index = 1; index <= 5; index++) {
            suma = suma + parseFloat(prompt("Ingrese valor " + index + ": "));
            
        }
        alert("La suma de los numeros ingresados es: "+ suma)
        break;

    case 2:
        let prom  = 0;
        let num;
        function esNumero(n) {            
            if (isNaN(n)) {
                alert('Debe ingresar solo numeros')
                return true
            }else {
                return false
            }
        }

        for (let index = 1; index <= 5; index++) {
            
            do {
                num = parseFloat(prompt("Ingrese valor " + index + ": "));
                //debugger;
            } while (esNumero(num));

            prom += num;
        }
        alert("El promedio de los numeros ingresados es: "+ prom/5)
        break;

    case 3:
        let edad;
        let mayores = 0;
        function esMayor(num) {
            if (num >= 18) {
                return true;
            }else {
                return false;
            }
        }
        do {
            edad = parseInt(prompt('Ingrese la Edad: '))
            if (esMayor(edad)) {
                mayores += 1
            }
        } while (edad != 0);        
        
        alert("De las edades ingresadas " + mayores + " edades son mayores de edad")
        break;

    case 4:
        let numero = 0;        
        let sumatoria = 0;
        let denominador = 0;
        let terminar = "no";
        function unDigito(num) {
            if ((num > -10) && (num < 10)) {
                return true;
            }else {
                return false
            }
        }
        function promedio(num, deno) {
            return num/deno
        }
        let cantidad = parseInt(prompt('Cantidad de numeros a Ingresar: '))
        for (let index = 1; index <= cantidad; index++) {
            numero = parseFloat(prompt("Ingrese numero "+ index + " :"));
            if (unDigito(numero)) {
                denominador += 1;
                sumatoria += numero;
            }           
        }
                        
        do{
            terminar = prompt("El promedio de los numeros de un digito es: " + promedio(sumatoria, denominador)+ "\n Para terminar escriba la palabra 'salir'");
        }while (terminar != "salir")
        
        break;

    case 5:
        
        break;

    case 6:
    
        break;

    default:
        alert("Debe ingresar una opcion valida")
        break;
}