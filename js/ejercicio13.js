//EJERCICIO 13.- Ingresar tres números enteros y mostrar el mayor de ellos.

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let mayor = 0,
      $p = document.querySelector("p");
    for (let i = 1; i < 4; i++) {
      let num = parseFloat(prompt(`Ingrese el valor: ${i}`));
      if (Number(num) !== num) return window.alert("No es un numero");
      if (mayor < num) mayor = num;
    }
    $p.innerHTML = `el numero mayor es ${mayor} 🤯`;
  }
});
