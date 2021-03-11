
document.write("<b>CICLO FOR : </b><br><hr>");
let vueltas = 10;
for (let step = 0; step < vueltas; step++) {
  // Se ejecuta 5 veces, con valores del paso 0 al 4.
  document.write("<b>Vuelta FOR Nro : </b>" + step + "<br>");
  console.log("Vuelta FOR Nro : "+ step)
}

document.write("<br><b>CICLO WHILE : </b><br><hr>");
n = 0;
x = 10;
while (n < x) {
  n ++;
  document.write("<b>Vuelta WHILE Nro : </b>" + n + "<br>");
  console.log("Vuelta WHILE Nro : "+ n)
}