//EJERCICO 12.- Hacer un programa que muestre el área y perímetro de un círculo.

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let radio = parseFloat(prompt("Ingrese el radio del circulo a calcular")),
      $p = document.querySelector("p");
    if (Number(radio) === radio) {
      let perimetro = 2 * Math.PI * radio,
        area = Math.PI * radio * radio;
      $p.innerHTML = `El permitro del circulo es: <span>${perimetro}</span> <br>
      El area del circulo es: <span>${area}</span>`;
    } else {
      $p.innerHTML = `<div class="alert alert-danger" role="alert">No es un valor valido🧐 ingrese un número</div>`;
    }
  }
});
