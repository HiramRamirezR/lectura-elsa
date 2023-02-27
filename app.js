const boton = document.querySelector('#boton');
const texto = document.querySelector('#texto');

let vocales = ['a', 'e', 'i', 'o', 'u'];
let consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'r', 's', 't', 'v', 'y', 'z'];

boton.addEventListener('click', () => {
  let consonante1 = consonantes[consonanteRandom()];
  let vocal1 = vocales[vocalRandom()];
  let consonante2 = consonantes[consonanteRandom()];
  let vocal2 = vocales[vocalRandom()];

  texto.innerHTML = `${consonante1}${vocal1}${consonante2}${vocal2}`;
})

vocalRandom = () => {
  return Math.floor(Math.random() * vocales.length);
}

consonanteRandom = () => {
  return Math.floor(Math.random() * consonantes.length);
}
