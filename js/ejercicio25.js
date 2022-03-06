//ELABORAR UN PROGRAMA QUE INGRESE 3 NÚMEROS Y MUESTRE EL NÚMERO INTERMEDIO.

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let a = parseInt(prompt("Ingrese el primer número"));
    let b = parseInt(prompt("Ingrese el segundo número"));
    let c = parseInt(prompt("Ingrese el tercer número"));
    let $p = document.querySelector("p");

    (a > b && a < c) || (a < b && a > c)
      ? ($p.innerHTML = `El numero medio es: ${a}`)
      : (b > a && b < c) || (b < a && b > c)
      ? ($p.innerHTML = `El numero medio es: ${b}`)
      : (c > a && c < b) || (c < a && c > b)
      ? ($p.innerHTML = `El numero medio es: ${c}`)
      : window.alert("Todos los números son iguales");
  }
});
