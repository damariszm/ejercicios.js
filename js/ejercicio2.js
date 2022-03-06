//Problema 2: Realizar un programa en el que se ingresen los datos de un trabajador y nos de como resultado el sueldo que debe obtener en base a sus horas trabajadas

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let nombre = prompt("Ingrese el nombre del trabajador"),
      hTrabajadas = parseFloat(prompt("¿Horas trabajadas en el mes?")),
      porHoras = parseFloat(prompt("¿Cuanto gana por hora?")),
      $p = document.querySelector("p");

    if (Number(hTrabajadas) === hTrabajadas || Number(porHoras) === porHoras) {
      const suma = hTrabajadas * porHoras;
      let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);
      return expReg
        ? ($p.innerHTML = `El trabajador <span class="text-success">${nombre}</span> va a tener como sueldo: $<span class="text-primary">${suma}</span>  🤑`)
        : ($p.innerHTML = `"<span class="text-danger">${nombre}</span>", No es un nombre valido`);
    } else {
      $p.innerHTML = `<span class="text-warning">No es un valor valido🧐</span>`;
    }
  }
});
