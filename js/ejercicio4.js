//Problema4: Calcular el área de un rectángulo, en un programa.
document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const base = parseInt(prompt("Cual es la base del rectangulo")),
      altura = parseInt(prompt("Cual es la altura del rectangulo"));
    $p = document.querySelector("p");
    if (Number(base) === base || Number(altura) === altura) {
      let area = base * altura,
        perimetro = 2 * base + 2 * altura;
      $p.innerHTML = `El area del rectangulo es de: <span class="text-danger">${area}</span>
      <br>
      El perimetro del rectangulo es de: <span class="text-danger">${perimetro}</span>`;
    } else {
      $p.innerHTML = `<div class="alert alert-danger" role="alert">No es un valor valido🧐 ingrese un número</div>`;
    }
  }
});
