//REALIZAR UN PROGRAMA QUE MUESTRE LA SIGUIENTE SERIE NUMERICA GRAFICA:

function graficar() {
  let num = parseInt(prompt("Introduce el numero de filas de la piramide"));
  if (Number(num) === num) {
    if (num > 0 && num <= 80) {
      for (let i = num; i >= 1; i--) {
        for (let repetir = i; repetir >= 1; repetir--) {
          document.write(i);
        }
      }
    } else {
      alert("El valor introducido no esta dentro del rango");
    }
  } else {
    alert("Error no es un número");
  }
}
