const img = document.querySelector("img");

const boton = document.querySelector('#boton');
const boton2 = document.querySelector('#boton2');
const texto = document.querySelector('#texto');
const cuenta = document.querySelector('#cuenta');
let contador = 0

const audio = new Audio("https://cdn.freesound.org/previews/221/221683_1015240-lq.mp3");

let vocales = ['a', 'e', 'i', 'o', 'u'];
let consonantes = ['b', 'c', 'd', 'f', 'g', 'j', 'l', 'm', 'n', 'p', 'r', 's', 't'];

boton.addEventListener('click', () => {
  let consonante1 = consonantes[consonanteRandom()];
  let vocal1 = vocales[vocalRandom()];
  let consonante2 = consonantes[consonanteRandom()];
  let vocal2 = vocales[vocalRandom()];

  audio.play();
  img.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];

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

const imagesArray = [
  "https://i.pinimg.com/originals/49/23/3a/49233a809e73d3be445a79c58e523f7f.gif",
  "https://media.tenor.com/kadmcBWPvBEAAAAC/elsa-frozen2-elsa.gif",
  "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/47/1511534368-giphy-4.gif",
  "https://media.tenor.com/q9M0_o9PJbAAAAAd/elsa-frozen2.gif",
  "https://i.pinimg.com/originals/46/3f/29/463f2940cc02a453ae7e6d946e915784.gif",
  "https://i.pinimg.com/originals/01/fc/a0/01fca0d7cd8e7258a79311c73fb9e1c0.gif",
  "http://pa1.narvii.com/6360/fc080e1d8f64394c9ee2465e27b6ae168ccd65b7_00.gif",
  "https://supercurioso.com/wp-content/uploads/2015/05/anafrozen.gif",
  "https://cdn.shopify.com/s/files/1/1338/0835/files/Collection-Banner-Frozen-M.gif?v=1573757996",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colour-pop-frozen-2-1573845313.gif",
  "https://media.tenor.com/SFW-jdnsXosAAAAC/snow-olaf.gif",
  "https://38.media.tumblr.com/6e6f98d471cafd7e1fe6f80d1d173c4e/tumblr_my8tk1XmVg1qdny4ho3_250.gif",
  "https://media.tenor.com/OT8woqzsF9cAAAAM/frozen2-disney.gif",
  "https://media.tenor.com/eYlL3-9G_rMAAAAC/frozen2-olaf.gif",
  "https://www.wdw-magazine.com/wp-content/uploads/2020/08/olaf-hugging-snowgies.gif"
]
