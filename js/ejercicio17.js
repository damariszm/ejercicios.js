//EJERCICIO 17.- Hacer un algoritmo que muestre el promedio de varias notas o de N notas ingresadas, se debe definir el valor de N para conocer la cantidad de notas a ingresar.

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let suma = 0,
      $p = document.querySelector("p"),
      n = parseInt(prompt("Ingrese el número de calificaciones"));

    for (let i = 1; i <= n; i++) {
      let nota = parseFloat(prompt(`Ingrese las calificaciones ${i}`));
      if (Number(n) !== n) return window.alert("No es un numero");
      if (n > 10) return window.alert("La nota máxima debe ser 10");
      suma = suma + nota;
      cali = suma / n;
    }
    $p.innerHTML = `El promedio de las <span>${n}</span> calificaciones es <span>${cali}</span>`;
  }
});
