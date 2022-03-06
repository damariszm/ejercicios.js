//EJERCICIO 21.- Comprobar que un numero de 4 y de 5 dígitos es palíndromo
document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let numero = parseInt(prompt("Ingrese un numero de 4 a 5 dígitos")),
      $p = document.querySelector("p");

    if (numero < 1000 || numero > 99999)
      return ($p.innerHTML = `¡Hey, no te pases!, Solo se aceptan numero de 4 a 5 dígitos😜`);

    if (Number(numero) !== numero)
      return ($p.innerHTML = `<span>Intentas pasar un dato que no es un numero?🤨</span>`);

    let alReves = Number(numero.toString().split("").reverse().join(""));

    return numero === alReves
      ? ($p.innerHTML = `Sí es palindromo, Número original <span>${numero}</span>, Número al revés es <span>${alReves}</span>🤗`)
      : ($p.innerHTML = `No es palíndromo, Número original <span>${numero}</span>, Número al revés es <span>${alReves}</span>🤔`);
  }
});
