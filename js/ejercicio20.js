//EJERCICIO 20. Diseñe un algoritmo que lea un numero de 3 cifra y determine si es o no palindromono.

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let numero = parseInt(prompt("Ingrese un numero de 3 dígitos")),
      $p = document.querySelector("p");

    if (numero < 100 || numero > 999)
      return window.alert("Solo se aceptan números de tres cifras");

    if (Number(numero) !== numero) return window.alert("No es un numero");

    let alReves = Number(numero.toString().split("").reverse().join(""));

    return numero === alReves
      ? ($p.innerHTML = `Sí es palindromo, Número original <span>${numero}</span>, Número al revés es <span>${alReves}</span>`)
      : ($p.innerHTML = `No es palíndromo, Número original <span>${numero}</span>, Número al revés es <span>${alReves}</span>`);
  }
});
