//EJERCICIO 18.-Hacer un programa que muestre el mayor de 10 números ingresados

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let mayor = 0,
      $p = document.querySelector("p");
    for (let i = 1; i <= 10; i++) {
      let num = parseFloat(prompt(`Ingrese el valor: ${i}`));
      if (Number(num) !== num) return window.alert("No es un numero");
      if (mayor < num) mayor = num;
    }
    $p.innerHTML = `el numero mayor es ${mayor} 🤯`;
  }
});
