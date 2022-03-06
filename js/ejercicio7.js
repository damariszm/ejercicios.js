let tiempoLlamada;
let total;
document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let clave = parseInt(
        prompt(`Escoja la clave hacia a donde llamar: 
          (1) - 0.15$ - Estados Unidos
          (2) - 0.14$ -Canada
          (3) - 0.25$ -España
          (4) - 0.05$ -Colombia
          (5) - 0.10$ -Venezuela
          (6) - 0.11$ -Mexico
          (7) - 0.12$ -Argentina
          (8) - 0.08$ -Panama
      `)
      ),
      $p = document.querySelector("p");

    if (Number(clave) === clave) {
      switch (clave) {
        case 1:
          tiempoLlamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
          total = 0.15 * tiempoLlamada;
          $p.innerHTML = `Su total a pagar es de: ${total} $`;
          break;

        case 2:
          tiempoLlamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
          total = 0.14 * tiempoLlamada;
          $p.innerHTML = `Su total a pagar es de: ${total} $`;
          break;

        case 3:
          tiempoLlamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
          total = 0.25 * tiempoLlamada;
          $p.innerHTML = `Su total a pagar es de: ${total} $`;
          break;

        case 4:
          tiempoLlamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
          total = 0.05 * tiempoLlamada;
          $p.innerHTML = `Su total a pagar es de: ${total} $`;
          break;

        case 5:
          tiempoLlamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
          total = 0.1 * tiempoLlamada;
          $p.innerHTML = `Su total a pagar es de: ${total} $`;
          break;

        case 6:
          tiempoLlamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
          total = 0.11 * tiempoLlamada;
          $p.innerHTML = `Su total a pagar es de: ${total} $`;
          break;

        case 7:
          tiempoLlamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
          total = 0.12 * tiempoLlamada;
          $p.innerHTML = `Su total a pagar es de: ${total} $`;
          break;

        case 8:
          tiempoLlamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
          total = 0.08 * tiempoLlamada;
          $p.innerHTML = `Su total a totales de: ${total} $`;
          break;

        default:
          alert("No hay ningun país con esa opción");
          break;
      }
    } else {
      $p.innerHTML = `<span class="text-warning">No es un valor valido🧐</span>`;
    }
  }
});
