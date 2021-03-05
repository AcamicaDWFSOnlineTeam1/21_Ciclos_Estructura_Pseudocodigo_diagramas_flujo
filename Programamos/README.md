Crea una rama de master, el nombre de su rama debe tener la siguiente estructura: pro_nombre_apellidoPaterno_appelidoMaterno 
ejemplo: pro_angel_perez_perez

Crea un directorio cuyo nombre debe tener la siguiente estructura:
nombre_apellidoPaterno_appelidoMaterno
ejemplo: angel_perez_perez

Dentro de este directorio cargar el o los archivos de la solución a la actividad programamos.

Ejemplo de comandos de git en consola
```
cd 21_Ciclos_Estructura_Pseudocodigo_diagramas_flujo
git checkout master
git checkout -b pro_ange_perez_perez
mkdir angel_perez_perez
cd angel_perez_perez
touch script.js
git add *
git commit -m "Solución programamos"
git push origin pro_ange_perez_perez
```
