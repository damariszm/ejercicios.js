//Problema: Ingrese dos números y realice una suma con los mismos.
document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let num1 = parseFloat(prompt("Ingrese el primer número")),
      num2 = parseFloat(prompt("Ingrese el segundo número")),
      $span = document.querySelector("span"),
      valorValido =
        "Advertencia, eso no es un valor valido y quiza no sea un número";
    if (Number(num1) === num1 || Number(num2) === num2) {
      const suma = num1 + num2;
      $span.innerHTML = `${suma}🤯`;
    } else {
      const hablar = (valorValido) =>
        speechSynthesis.speak(new SpeechSynthesisUtterance(valorValido));
      hablar(valorValido);
    }
  }
});

//Para que hable la pc
let parlar =
  "Buenos días, tardes o noches, sean todos bienvenidos a esta sección, aquí evaluaremos todo lo relacionado con la logica de programación, ¿Como se pasan los ejercicios de PSeint a Javascript?";
const hablar = (parlar) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(parlar));
hablar(parlar);
