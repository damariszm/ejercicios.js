//Problema 5 Hacer un programa para calcular el promedio de 3 notas, si el promedio es menor a 6.95 se lo considera REPROBADO caso contrario Aprobado

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let nombre = prompt("Nombre del estudiante"),
      nota1 = parseFloat(prompt("Ingrese la Nota 1")),
      nota2 = parseFloat(prompt("Ingrese la Nota 2")),
      nota3 = parseFloat(prompt("Ingrese la Nota 3")),
      $p = document.querySelector("p");

    if (
      Number(nota1) === nota1 ||
      Number(nota2) === nota2 ||
      Number(nota3) === nota3
    ) {
      let promedio = (nota1 + nota2 + nota3) / 3;
      if (/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre)) {
        promedio >= 6.95
          ? ($p.innerHTML = `El estudiante ${nombre} tiene como promedio ${promedio} así que aprovo😎`)
          : ($p.innerHTML = `El estudiante ${nombre} tiene como promedio ${promedio} así que reprovo😭`);
      } else {
        $p.innerHTML = `"<span class="text-danger">${nombre}</span>", No es un nombre valido`;
      }
    } else {
      $p.innerHTML = `<span class="text-warning">No es un valor valido🧐</span>`;
    }
  }
});
