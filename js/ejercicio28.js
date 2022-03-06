// REALIZAR UN PROGRAMA QUE VERIFIQUE SI UN NUMERO CUALQUIERA ES PALINDROMO O NO CON LAS DEBIDAS EXEPCIONES A LA REGLA

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let numero = parseInt(prompt("Ingrese un numero")),
      $p = document.querySelector("p");

    if (Number(numero) !== numero) return window.alert("No es un numero");

    let alReves = Number(numero.toString().split("").reverse().join(""));

    return numero === alReves
      ? ($p.innerHTML = `Sí es palindromo, Número original <span>${numero}</span>, Número al revés es <span>${alReves}</span>`)
      : ($p.innerHTML = `No es palíndromo, Número original <span>${numero}</span>, Número al revés es <span>${alReves}</span>`);
  }
});
