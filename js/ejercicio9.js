//Problema 9 La suma de n números naturales, donde n es el numero limite que ingresa el usuario.

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let n = parseInt(prompt("Ingrese un numero:")),
      $p = document.querySelector("p");
    if (Number(n) === n) {
      cont = 0;
      suma = 0;
      while (cont < n) {
        cont = cont + 1;
        suma = suma + cont;
      }
      $p.innerHTML = `La suma es: <span class="text-primary">${suma}</span>`;
    } else {
      $p.innerHTML = `<span class="text-warning">No es un valor valido🧐</span>`;
    }
  }
});
