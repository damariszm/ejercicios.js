//Problema6: Escribir un programa que nos indique si la letra ingresada es vocal o consonante
document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let cadena = prompt("Ingrese solo una letra o vocal"),
      $p = document.querySelector("p");
    if (!cadena) {
      $p.innerHTML = `<span class="text-warning">No has ingresado ningun texto</span>😲`;
    } else {
      /[aeiouáéíóúÜ]/.test(cadena)
        ? ($p.innerHTML = `Es una vocal <span class="text-danger">${cadena}</span>🧐`)
        : /[bcdfghjklmnñpqrstvwxyz]/.test(cadena)
        ? ($p.innerHTML = `Es una letra <span class="text-danger">${cadena}</span>😍`)
        : ($p.innerHTML = `Es un número🤓`);
    }
  }
});

//si etonces 
