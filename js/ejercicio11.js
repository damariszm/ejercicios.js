//EJERCICO 11 Ingrese la cantidad de alumnos aprobados y desaprobados de un curso, luego mostrar el porcentaje de estudiantes aprobados y el porcentaje de estudiantes desaprobados.
//Algoritmo porcentual de estudiantes aprobados y desaprobados

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let aprov = parseInt(
        prompt("Ingrese la cantidad de estudiantes aprovados")
      ),
      desaprov = parseInt(
        prompt("Ingrese la cantidad de estudiantes desaprovados")
      ),
      $p = document.querySelector("p");

    if (Number(aprov) === aprov || Number(desaprov) === desaprov) {
      let total = aprov + desaprov;
      let porcentajeAprovados = (aprov * 100) / total;
      let porcentajeDesaprovados = (desaprov * 100) / total;

      $p.innerHTML = `Porcentaje de estudiantes aprovados😎: <span>${porcentajeAprovados}%</span>
      <br>
      Porcentaje de estudiantes desaprovados😭: <span>${porcentajeDesaprovados}%</span>
      <br>
      El porcentaje total de calificaciones es: <span>${total}</span>
      `;
    } else {
      $p.innerHTML = `<div class="alert alert-danger" role="alert">No es un valor valido🧐 ingrese un número</div>`;
    }
  }
});
