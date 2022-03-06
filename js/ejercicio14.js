//EJERCICIO 14.- Se pide ingresar el sueldo de un trabajador y su categoría, dependiendo de la categoría se le dará una bonificación en el neto a pagar.
//Bonificación por categoría: A = 10%; B = 20%; C = 30%; D = 50%

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let categoria = prompt("¿A que categoria pertenece? A, B, C o D"),
      sueldo = parseFloat(prompt("Ingrese el sueldo del trabajador")),
      $p = document.querySelector("p");
    if (Number(sueldo) !== sueldo) return window.alert("No es un numero");
    categoria === "A" || categoria === "a"
      ? ($p.innerHTML = `Su sueldo a pagar es de: ${sueldo * 0.1}`)
      : categoria === "B" || categoria === "b"
      ? ($p.innerHTML = `Su sueldo a pagar es de: ${sueldo * 0.2}`)
      : categoria === "C" || categoria === "c"
      ? ($p.innerHTML = `Su sueldo a pagar es de: ${sueldo * 0.3}`)
      : categoria === "D" || categoria === "d"
      ? ($p.innerHTML = `Su sueldo a pagar es de: ${sueldo * 0.5}`)
      : ($p.innerHTML = `"No le pertenece ninguna Bonificación por su categoría"`);
  }
});
