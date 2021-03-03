Crea una rama de master, el nombre de su rama debe tener la siguiente estructura:
ch_nombre_apellidoPaterno_appelidoMaterno
ejemplo: ch_angel_perez_perez

Crea un directorio cuyo nombre debe tener la siguiente estructura:  
nombre_apellidoPaterno_appelidoMaterno  
ejemplo: angel_perez_perez  

Dentro de este directorio cargar el o los archivos de la solución al challengue.

Ejemplo de comandos de git en consola
```
cd 21_Ciclos_Estructura_Pseudocodigo_diagramas_flujo
git checkout master
git checkout -b ch_ange_perez_perez
mkdir angel_perez_perez
cd angel_perez_perez
touch script.js
git add *
git commit -m "Solución challenge"
git push origin ch_ange_perez_perez
```

# Challengue

Te proponemos el siguiente desafío, ¿te animas?

Escribe dos ciclos, uno con for el otro con while, que se repitan exactamente 10 vueltas.
