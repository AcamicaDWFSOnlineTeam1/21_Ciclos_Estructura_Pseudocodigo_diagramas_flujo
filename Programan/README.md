Crea una rama de main, el nombre de su rama debe tener la siguiente estructura:
pro_nombre_apellidoPaterno_appelidoMaterno
ejemplo: pro_angel_perez_perez

Crea un directorio cuyo nombre debe tener la siguiente estructura:  
nombre_apellidoPaterno_appelidoMaterno  
ejemplo: angel_perez_perez  

Dentro de este directorio cargar el o los archivos de la solución al challengue.

Ejemplo de comandos de git en consola
```
cd 21_Ciclos_Estructura_Pseudocodigo_diagramas_flujo
git checkout main
git checkout -b pro_ange_perez_perez
mkdir angel_perez_perez
cd angel_perez_perez
touch script.js
git add *
git commit -m "Solución challenge"
git push origin pro_ange_perez_perez
```

Una vez agregada la solución a su branch lo que sigue es crear un **pull request (PR)**, para ello
realizamos los siguientes pasos:

- Actualizar su rama de trabajo con los ultimos cambios de main (antes master)
```
git checkout main
git pull origin main
git checkout pro_ange_perez_perez
git merge main
```

- En la pagína de su branch hacemos clic en el texto **pull request** 
![imagen](https://user-images.githubusercontent.com/16826246/109855157-91fb6680-7c1d-11eb-9b9e-88c387afeec4.png)

- Capturar la información requerida
![imagen](https://user-images.githubusercontent.com/16826246/109855968-8eb4aa80-7c1e-11eb-969a-f05cae892423.png)

donde:
1. La rama (**branch**) a la cual se unificaran (**merge**) los cambios de su rama
2. Su rama en la que estan trabajando
3. Las personas que revisaran su código (**reviewers**), aquí agregan mi usuario **cyberhavok** y si gustan agregar
  a otras personas adelante.
4. Título del PR
5. Comentarios relacionados con el PR
6. Finalmente crean el pull request (**Create pull request**)

# Programan

## 1. Sumemos
Crear un script que permita ingresar solamente 5 valores mediante prompt y nos muestre la suma total de todos los valores ingresados.
Mostrar el resultado utilizando un alert.

## 2. Promedio
A nuestro script agreguemos el promedio de todos los números ingresados.
Muestra el resultado con un alert.
¿Validaron que los datos ingresados sean números?
Si no lo hicieron, éste es el momento

## 3. Edades
Ingresar N cantidad de edades mediante prompt hasta que se ingrese un cero.
Al finalizar mostrar cuántos son mayores de edad.
Muestra el resultado con un alert.
Válida la mayoría de edad a través de una función.

## 4. Promedio condicional
Ingresar N cantidad de números mediante prompt.
Mostrar el promedio de los números ingresados de 1 dígito.
Terminar el programa con la palabra “salir”.
Muestra el resultado con un alert.
Genera el promedio utilizando una función.

## 5. Pares e impares
Ingresar N cantidad de números mediante prompt.
Mostrar quién tuvo más ingresos, si los pares o los impares.
Terminar el programa un 0.
Muestra el resultado con un alert
alcula si el número ingresado es par o impar a través de una función.

## 6. De números a letras
Ingresa un número entre 1 y 10 mediante prompt y transformarlo en su equivalente en el abecedario.
Siendo 1 = a y 10 = j cualquier otro valor mostrar un mensaje de error.
Muestra el resultado con un alert.
Utiliza una función para transformar el número a letra.
