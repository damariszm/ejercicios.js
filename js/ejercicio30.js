function draw() {
  let num = parseInt(prompt("Ingrese un numero"));
  let cont;
  let acumulador;
  let $p = document.querySelector("p");

  if (Number(num) !== num)
    return ($p.innerHTML = `<span>${num}</span> Solo se acepta números`);

  if (num < 3) {
    alert(
      "No se puede ejecutar con numeros menores a 3 por favor vuelva ingresar un numero"
    );
  } else {
    cont = num;
    acumulador = "";

    for (let i = 1; i <= 3; i++) {
      acumulador = document.write("<br>");
      for (let j = 1; j <= cont; j++) {
        acumulador = acumulador + " * ";
      }
      cont = cont - 1;
      document.write(acumulador);
    }
    cont = cont + 1;
    for (let k = 1; k <= 2; k++) {
      acumulador = document.write("<br>");
      cont = cont + 1;
      for (let m = 1; m <= cont; m++) {
        acumulador = acumulador + " * ";
      }
      document.write(acumulador);
    }
  }
}
