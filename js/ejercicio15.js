//EJERCICIO 15.- Elaborar un programa que permita ingresar 10 número enteros y muestre la cantidad de números pares e impares ingresados.

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let pares = 0,
      impares = 0,
      $p = document.querySelector("p");
    for (let i = 1; i <= 10; i++) {
      let num = parseInt(prompt(`Ingrese un número: ${i}`));
      if (Number(num) !== num) return window.alert("No es un numero");
      num % 2 === 0 ? (pares = pares + 1) : (impares = impares + 1);
    }
    $p.innerHTML = `Números pares: <span>${pares}</span><br>Números impares: <span>${impares}</span>`;
  }
});
