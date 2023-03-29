const img = document.querySelector("img");

const boton = document.querySelector('#boton');
const texto = document.querySelector('#texto');
const cuenta = document.querySelector('#cuenta');
let contador = 0

const audio = new Audio("https://cdn.freesound.org/previews/221/221683_1015240-lq.mp3");

const palabras = ["mamá", "papá", "gato", "pero", "casa", "mesa", "pelota", "tigre", "león", "lobo", "ratón", "color", "nariz", "oso", "cabeza", "cochino", "pecesito", "sol", "luna", "mano", "pie", "elefante", "jirafa", "camión", "bicicleta", "fresa", "plátano", "naranja", "uva", "manzana", "sandía", "papaya", "melón", "cereza", "ciruela", "mango", "kiwi", "durazno", "piña", "limón", "lima", "zanahoria", "tomate", "cebolla", "papa", "maíz", "brócoli", "coliflor", "pepino", "chile", "ajo", "queso", "leche", "huevo", "pollo", "carne", "pescado", "arroz", "frijol", "pan", "galleta", "pastel", "helado", "chocolate", "azúcar", "sal", "aceite", "agua", "refresco", "jugo", "café", "té", "mes", "sol", "luna", "mar", "río", "montaña", "valle", "ciudad", "país", "casa", "escuela", "parque", "juego", "trabajo", "amigo", "familia", "fiesta", "viaje", "música", "arte", "película", "libro", "foto", "televisión", "ordenador", "solapa", "jaula", "espejo", "mariposa", "colmena", "pluma", "pimiento", "peinado", "limpieza", "percha", "aguacate", "hormiga", "vaca", "cerdo", "gallina", "patito", "conejo", "caballo", "oído", "nube", "tormenta", "rayo", "nieve", "viento", "hueso", "muela", "uña", "rana", "cigarra", "delfín", "ballena", "pulpo", "medusa", "estrella", "marciano", "robot", "cohetes", "telescopio", "globo", "burbujas", "barco", "bote", "tren", "avión", "autobús", "helicoptero", "cometa", "unicornio", "dragón", "bruja", "fantasma", "duende", "hada", "princesa", "caballero", "pirata", "astronauta", "superhéroe", "policía", "bombero", "chef", "doctor", "enfermera", "maestro", "abogado", "arquitecto", "ingeniero", "artista", "actor", "mago", "mecánico", "piloto", "soldado", "nadador", "bailarín", "cantante"]

boton.addEventListener('click', () => {

  contador++;
  cuenta.innerHTML = contador;

  texto.innerHTML = palabras[Math.floor(Math.random() * palabras.length)];

  audio.play();
  img.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
})

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
  "https://www.wdw-magazine.com/wp-content/uploads/2020/08/olaf-hugging-snowgies.gif",
  "https://i.pinimg.com/originals/c4/7e/f4/c47ef4b91aff08466a5cd3e29bcc87f7.gif",
  "https://media2.giphy.com/media/BFg8adASnmMrS/giphy.gif",
  "https://media.tenor.com/q9M0_o9PJbAAAAAd/elsa-frozen2.gif",
  "https://www.cartonionline.com/wordpress/wp-content/uploads/2023/03/elsa_ai_11.jpg",
  "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_480x270/public/media/image/2013/11/264787-critica-frozen-reino-hielo.jpg?itok=H7m7316x",
  "https://estaticos-cdn.elperiodico.com/clip/98ea9ae9-87b2-420e-8667-d592b57d5462_alta-libre-aspect-ratio_default_0.jpg",
  "https://tendencybook.com/wp-content/uploads/2017/05/Frozen-portada.jpg",
  "https://i.gifer.com/origin/cd/cd24199d048fc84e7681b7c20aa87b89.gif",
  "https://img.buzzfeed.com/buzzfeed-static/static/2023-02/9/21/asset/83fa98a6d09e/anigif_sub-buzz-1726-1675978357-1.gif",
  "https://sm.mashable.com/mashable_it/photo/default/frozen2-characters-hugging-700x315_mu6e.jpg"
]
