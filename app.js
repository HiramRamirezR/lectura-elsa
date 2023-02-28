const boton = document.querySelector('#boton');
const boton2 = document.querySelector('#boton2');
const texto = document.querySelector('#texto');
const cuenta = document.querySelector('#cuenta');
let contador = 0

const audio = new Audio("https://cdn.freesound.org/previews/221/221683_1015240-lq.mp3");

let vocales = ['a', 'e', 'i', 'o', 'u'];
let consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'r', 's', 't', 'v', 'y', 'z'];

boton.addEventListener('click', () => {
  let consonante1 = consonantes[consonanteRandom()];
  let vocal1 = vocales[vocalRandom()];
  let consonante2 = consonantes[consonanteRandom()];
  let vocal2 = vocales[vocalRandom()];

  audio.play();

  texto.innerHTML = `${consonante1}${vocal1}${consonante2}${vocal2}`;
})

boton2.addEventListener('click', () => {
  contador++
  cuenta.innerHTML = contador
});

vocalRandom = () => {
  return Math.floor(Math.random() * vocales.length);
}

consonanteRandom = () => {
  return Math.floor(Math.random() * consonantes.length);
}
