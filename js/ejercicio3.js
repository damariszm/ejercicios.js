//Problema 3: Realizar un programa en el que se calcule la cuenta a pagar en base a su precio y cantidad después sacar el 10% de descuento para el total a pagar.

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let product = prompt("Nombre del producto"),
      costoPorUnidad = parseFloat(prompt("¿Cuanto vale cada unidad?")),
      unidades = parseFloat(prompt("¿Cuantas unidades desea adquirir?")),
      $p = document.querySelector("p");

    if (
      Number(costoPorUnidad) === costoPorUnidad ||
      Number(unidades) === unidades
    ) {
      let subtotal = costoPorUnidad * unidades;
      let descuento = subtotal * 0.1;
      let total = subtotal - descuento;
      let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(product);

      return expReg
        ? ($p.innerHTML = `El sub total es de $<span class="text-danger">${subtotal}</span><br>Su descuento es de: $<span class="text-primary">${descuento}</span><br>El total a pagar por <span class="text-danger">${product} </span>es de: $<span class="text-info">${total}</span>`)
        : ($p.innerHTML = `"<span class="text-danger">${product}</span>", No tenemos ese producto`);
    } else {
      $p.innerHTML = `<span class="text-warning">No es un valor valido🧐</span>`;
    }
  }
});
