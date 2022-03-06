//let fecha = prompt("Ingrese una fecha en este formato día/mes/años");

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let dia = parseInt(prompt("Ingrese un día")),
      mes = parseInt(prompt("Ingresar mes")),
      age = parseInt(prompt("Ingresar año")),
      $p = document.querySelector("p"),
      b;

    if (Number(dia) === dia || Number(mes) === mes || Number(age) === age) {
      if (
        age >= 1582 &&
        age <= 3000 &&
        mes >= 1 &&
        mes <= 30 &&
        dia >= 1 &&
        dia <= 31
      ) {
        if ((age % 4 === 0 && age % 100 !== 0) || age % 400 === 0) {
          $p.innerHTML = `<span class="text-primary">AÑO BISIESTO</span>`;
          b === 0;
        } else {
          $p.innerHTML = `<span class="text-danger">No es BISIESTO</span>`;
          b === 1;
        }
        if (b === 0) {
          switch (mes) {
            case (1, 3, 5, 7, 8, 10, 12):
              dia >= 1 && dia <= 31
                ? ($p.innerHTML = `FECHA CORRECTA`)
                : ($p.innerHTML = `FECHA NO CORRECTA`);
              break;

            case 2:
              dia >= 1 && dia <= 29
                ? ($p.innerHTML = `FECHA CORRECTA`)
                : ($p.innerHTML = `FECHA NO CORRECTA`);
              break;

            case (4, 6, 9, 11):
              dia >= 1 && dia <= 30
                ? ($p.innerHTML = `FECHA CORRECTA`)
                : ($p.innerHTML = `FECHA NO CORRECTA`);
              break;
          }
        } else {
          switch (mes) {
            case (1, 3, 5, 7, 8, 10, 12):
              dia >= 1 && dia <= 31
                ? ($p.innerHTML = `FECHA CORRECTA`)
                : ($p.innerHTML = `FECHA NO CORRECTA`);
              break;

            case 2:
              dia >= 1 && dia <= 28
                ? ($p.innerHTML = `FECHA CORRECTA`)
                : ($p.innerHTML = `FECHA NO CORRECTA`);
              break;

            case (4, 6, 9, 11):
              dia >= 1 && dia <= 30
                ? ($p.innerHTML = `FECHA CORRECTA`)
                : ($p.innerHTML = `FECHA NO CORRECTA`);
              break;
          }
        }
      } else {
        `<span class="text-danger">Error en la fecha</span>`;
      }
    } else {
      $p.innerHTML = `<span class="text-warning">No es un valor valido🧐</span>`;
    }
  }
});
