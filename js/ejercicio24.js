let pares = 0;
let impares = 0;
let $p = document.querySelector("p");
let $b = document.querySelector("b");
let $impar = document.querySelector("#impar");
let $par = document.querySelector("#par");

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    $b.innerHTML += `El número: ${i} es divisible para 2<br>`;
    pares = pares + 1;
    $par.innerHTML = `Hay un total de ${pares} Números divisibles para "2"`;
  }
  if (i % 3 === 0) {
    $p.innerHTML += `El número: ${i}; es divisible para 3<br>`;
    impares = impares + 1;
    $impar.innerHTML = `Hay un total de ${impares} Números divisibles para "3"`;
  }
}
