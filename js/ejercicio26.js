//MOSTRAR EL COSTO A PAGAR POR UNA LLAMADA TELEFÓNICA, SEGÚN LA ZONA DE DESTINO Y LA DURACIÓN EN MINUTOS CON SUS RESPECTIVAS RESTRICCIONES.
let tiempoLlamada;
let total;
document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let clave = parseInt(
        prompt(`Escoja la clave hacia a donde llamar:
              (1) - 0.13$ - Estados Unidos
              (2) - 0.11$ -Canada
              (5) - 0.52$ -América del Sur
              (6) - 0.99$ -América Central"
              (8) - 0.17$ -Mexico
              (9) - 0.17$ -Europa
              (10) - 0.20$ -Asia
              (15) - 0.59$ -África
              (20) - 0.28$ -Oceaniá"
    `)
      ),
      $p = document.querySelector("p");

    if (Number(clave) !== clave)
      return ($p.innerHTML = `<span class="text-warning">No es un valor valido🧐</span>`);

    switch (clave) {
      case 1:
        tiempoLlamada = parseFloat(
          prompt("¿Cuantos minutos duro la llamada?📲")
        );
        total = 0.13 * tiempoLlamada;
        $p.innerHTML = `Su total a pagar es de: <span>${total}</span>$`;
        break;
      case 2:
        tiempoLlamada = parseFloat(
          prompt("¿Cuantos minutos duro la llamada?📲")
        );
        total = 0.11 * tiempoLlamada;
        $p.innerHTML = `Su total a pagar es de: <span>${total}</span>$`;
        break;
      case 5:
        tiempoLlamada = parseFloat(
          prompt("¿Cuantos minutos duro la llamada?📲")
        );
        total = 0.52 * tiempoLlamada;
        $p.innerHTML = `Su total a pagar es de: <span>${total}</span>$`;
        break;
      case 6:
        tiempoLlamada = parseFloat(
          prompt("¿Cuantos minutos duro la llamada?📲")
        );
        total = 0.99 * tiempoLlamada;
        $p.innerHTML = `Su total a pagar es de: <span>${total}</span>$`;
        break;
      case 8:
        tiempoLlamada = parseFloat(
          prompt("¿Cuantos minutos duro la llamada?📲")
        );
        total = 0.17 * tiempoLlamada;
        $p.innerHTML = `Su total a pagar es de: <span>${total}</span>$`;
        break;
      case 9:
        tiempoLlamada = parseFloat(
          prompt("¿Cuantos minutos duro la llamada?📲")
        );
        total = 0.17 * tiempoLlamada;
        $p.innerHTML = `Su total a pagar es de: <span>${total}</span>$`;
        break;
      case 10:
        tiempoLlamada = parseFloat(prompt("¿Cuantos minutos duro la llamada?"));
        total = 0.2 * tiempoLlamada;
        $p.innerHTML = `Su total a pagar es de: <span>${total}</span>$`;
        break;
      case 15:
        tiempoLlamada = parseFloat(
          prompt("¿Cuantos minutos duro la llamada?📲")
        );
        total = 0.59 * tiempoLlamada;
        $p.innerHTML = `Su total a pagar es de: <span>${total}</span>$`;
        break;
      case 20:
        tiempoLlamada = parseFloat(
          prompt("¿Cuantos minutos duro la llamada?📲")
        );
        total = 0.28 * tiempoLlamada;
        $p.innerHTML = `Su total a pagar es de: <span>${total}</span>$`;
        break;
      default:
        alert("No hay llamadas para ese país.");
        break;
    }
  }
});
