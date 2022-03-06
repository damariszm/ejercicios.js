//Problema 8 Realizar un programa que clasifiqué a partir de la nota si un estudiante Desaprobado; 5-7: Aprobado; 8-9: Excelente y 10: BECADO

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let nombre = prompt("Ingrese el nombre del estudiante"),
      nota = parseFloat(prompt("Ingrese la nota del estudiante")),
      $p = document.querySelector("p");

    if (Number(nota) === nota) {
      if (nota > 10)
        return ($p.innerHTML = `<b>La nota no debe pasar de 10 🤓</b>`);

      let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);
      if (expReg) {
        nota >= 0 && nota <= 2
          ? ($p.innerHTML = `El estudiante: ${nombre}, Necesita Reforzamiento😲`)
          : nota >= 3 && nota <= 4
          ? ($p.innerHTML = `El estudiante: ${nombre}, Esta Desaprobado🤯`)
          : nota >= 5 && nota <= 7
          ? ($p.innerHTML = `El estudiante: ${nombre}, Esta aprobado😉`)
          : nota >= 8 && nota <= 9
          ? ($p.innerHTML = `El estudiante: ${nombre}, Tiene un promedio EXCELENTE😍`)
          : nota == 10
          ? ($p.innerHTML = `El estudiante: ${nombre}, Esta BECADO😎`)
          : ($p.innerHTML = "Nota no valida volver a ingresar😅");
      } else {
        $p.innerHTML = `"<span class="text-danger">${nombre}</span>", No es un nombre😶`;
      }
    } else {
      $p.innerHTML = `<span class="text-warning">No es un valor valido🧐</span>`;
    }
  }
});
