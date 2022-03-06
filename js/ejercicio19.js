//EJERCICIO 19.- Hacer un programa que ordene los números ingresados de mayor a menor y de menor a mayor.
document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let $p = document.querySelector("p"),
      $b = document.querySelector("b");

    const numero = parseInt(
      prompt("Ordenamiento Matematico🧐 ¿Que número desea agregar?")
    );

    if (Number(numero) !== numero) return window.alert("No es un numero");
    const numbers = [];
    numbers.push(numero);
    while (confirm("¿Deseas agregar otro número?😉")) {
      const numero = parseInt(prompt("¿Qué número desea agregar"));
      if (Number(numero) !== numero) return window.alert("No es un numero");
      numbers.push(numero);
    }

    let order = parseInt(
      prompt(`Elija la opción que represente el orden que deasea 
      Opciónes:
      (1) De menor a mayor
      (2) De mayor a menor`)
    );
    if (Number(order) !== order) return window.alert("No es un numero");

    if (order === 1) {
      numbers.sort((a, b) => {
        if (a == b) return 0;
        if (a < b) return -1;
        return 1;
      });
      $p.innerHTML = `"Se ordeno de menor a mayor😉"`;
    }

    if (order === 2) {
      numbers.sort((a, b) => {
        if (a == b) return 0;
        if (a > b) return -1;
        return 1;
      });
      $p.innerHTML = `"Se ordeno de mayor a menor 🤯"`;
    }
    $b.innerHTML += `Ordenando numeros... <span><span>${numbers}</span> <br></span>`;
  }
});
