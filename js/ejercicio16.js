//EJERCICIO 16.- Ingresar un número y mostrar la suma de todos los pares e impares desde 0 hasta el número ingresado.

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let n = parseInt(prompt("Ingrese el número total a sumar")),
      pares = 0,
      impares = 0,
      $p = document.querySelector("p"),
      $b = document.querySelector("b");
    for (let i = 0; i <= n; i++) {
      if (Number(n) !== n) return window.alert("No es un numero");
      i % 2 == 0 ? (pares = pares + i) : (impares = impares + i);
      $b.innerHTML += `números recorridos: <span><span>${i}</span> <br></span>`;
    }
    $p.innerHTML = `La suma total de <span>${n}</span> en números pares nos da: <span>${pares}</span>, <br> La suma total de <span>${n}</span> en números impares nos da: <span>${impares}</span>🤯`;
  }
});
