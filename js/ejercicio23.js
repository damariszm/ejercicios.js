//HACER UN ALGORITMO QUE NOS CALCULE LA SUMA DE LOS N PRIMEROS NÚMEROS PARES SIGUIENTES AL NÚMERO. ES DECIR; SI INSERTAMOS UN 5, NOS HAGA LA SUMA DE 6+8+10+12+14.

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let n = parseFloat(prompt("Ingrese un número"));
    let hasta = n + 10;
    let suma = 0;
    let $span = document.querySelector("span");
    let $p = document.querySelector("p");
    let $b = document.querySelector("b");

    if (Number(n) !== n) return window.alert("No es un numero");

    $span.innerHTML = `💻 Calculando la suma de los primeros números pares siguientes de: ${n}`;

    while (n < hasta) {
      if (n % 2 === 0) {
        suma = suma + n;
        $b.innerHTML += `+ <span>${n}</span><br>`;
      }
      n = n + 1;
    }
    $p.innerHTML = `La suma total de los números pares es: <span>${suma}</span> 🥰`;
  }
});
