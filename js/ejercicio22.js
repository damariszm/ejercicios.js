//REALIZAR UN PROGRAMA QUE MUESTRE LA SERIE DE FIBONACCI

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let n = parseInt(
        prompt("🧐¿Qué número va a agregar para la serie fibonacci?🍷")
      ),
      $p = document.querySelector("p"),
      $b = document.querySelector("b"),
      a = 0,
      b = 1;

    if (Number(n) !== n) alert("No es un numero🧐");

    for (let i = 1; i <= n; i++) {
      $p.innerHTML += `La serie fibonacci de ${n} es: <span>${a}</span> 🤯<br>`;
      c = a + b;
      a = b;
      b = c;
    }
    $b.innerHTML = `Una vez que aya realizado una suma fibonacci, asegurese de recargar la pagina para seguir calculando 🙃`;
  }
});
