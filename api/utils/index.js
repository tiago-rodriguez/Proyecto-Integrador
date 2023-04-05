const Properties = require("../models/Properties");
const db = require("../config/db");

const array = [
  {
    title: "Departamento 1 Ambiente - Barrio Norte, Capital Federal",
    adress: " Azucena Villaflor 500",
    city: " Buenos Aires",
    country: " Argentina",
    locate: "Av.Las Heras",
    description:
      "Derpartamento ubicado en RECOLETA. Próximo a las Avenidas Coronel Diaz , Avda las Heras. Cerca de todos los medios de transporte. ",
    available: true,
    meters: " 35m²",
    rooms: 2,
    bathrooms: 2,
    enviroments: 3,
    category: " Departamento",
    operation: "Alquiler",
    price: 45509,
    image:
      "https://imgar.zonapropcdn.com/avisos/1/00/49/30/94/03/360x266/1799091787.jpg",

    image_2:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/70/50/360x266/1858970312.jpg",

    image_3:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/70/50/360x266/1858970308.jpg",

    image_4:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/70/50/360x266/1858970311.jpg",

    image_5:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/70/50/360x266/1858970330.jpg",

    image_6:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/28/66/43/360x266/1858604735.jpg",
  },

  {
    title: "Venta. 4 Ambientes. Cochera. French y Anchorena.",
    adress: "French 2600",
    city: " Buenos Aires",
    country: "Argentina",
    locate: " Av.Las Heras",
    description:
      "Dormitorio 1: 2,80 x 3,80 m. Dormitorio 2: 3,32 x 2,40 m. Dormitorio 3: 2,05 x 4,15 m. Living: 2,92 x 7,66 m. Balcón corrido: 1,20 x 8 m.",
    available: true,
    meters: " 95m²",
    rooms: 3,
    bathrooms: 1,
    enviroments: 3,
    category: " Departamento",
    operation: " Venta",
    price: 200000,
    image:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/09/22/360x266/1858842165.jpg",

    image_2:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/09/22/360x266/1858842155.jpg",

    image_3:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/09/22/360x266/1858842199.jpg",

    image_4:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/09/22/360x266/1858842197.jpg",

    image_5:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/09/22/360x266/1858842159.jpg",

    image_6:
      "https://imgar.zonapropcdn.com/avisos/1/00/50/78/53/73/360x266/1844216732.jpg",
  },
  {
    title: "French 2600 y Anchorena: Lindisimo con Balcon",
    adress: "French al 2600",
    city: "Buenos Aires",
    country: "Argentina",
    locate: "French",
    description:
      "semipiso palier individual luminoso buen estado  general, 2 dormitorios  con 2 baños, uno en suite.  Luz y Sol, muy buen pulmón. ",
    available: true,
    meters: "70m²",
    rooms: 2,
    bathrooms: 2,
    enviroments: 3,
    category: "Departamento",
    operation: "Alquiler",
    price: 60700,
    image:
      "https://imgar.zonapropcdn.com/avisos/1/00/47/80/59/28/360x266/1850794902.jpg",

    image_2:
      "https://imgar.zonapropcdn.com/avisos/1/00/47/80/59/28/360x266/1850794887.jpg",

    image_3:
      "https://imgar.zonapropcdn.com/avisos/1/00/47/80/59/28/360x266/1850794898.jpg",

    image_4:
      "https://imgar.zonapropcdn.com/avisos/1/00/47/80/59/28/360x266/1850794896.jpg",

    image_5:
      "https://imgar.zonapropcdn.com/avisos/1/00/47/80/59/28/360x266/1850794886.jpg",

    image_6:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/27/93/29/360x266/1857923600.jpg",
  },
  {
    title: "Departamento · 51m² · 2 Ambientes ",
    adress: "Carranza al 1300",
    city: "Buenos Aires",
    country: "Argentina",
    locate: "Palermo",
    description:
      "Espectacular 2 ambientes TOTALMENTE AMOBLADO, a estrenar en el Complejo Vitta Carranza en PalermoEdificio de 9 pisos,",
    available: false,
    meters: "63m²",
    rooms: 2,
    bathrooms: 1,
    enviroments: 1,
    category: "Departamento",
    operation: "Alquiler",
    price: 4550,
    image:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/26/18/72/360x266/1857539861.jpg",

    image_2:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/26/18/72/360x266/1857539855.jpg",

    image_3:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/26/18/72/360x266/1857539863.jpg",

    image_4:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/26/18/72/360x266/1857539853.jpg",

    image_5:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/26/18/72/360x266/1857539854.jpg",

    image_6:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/10/28/77/360x266/1853834646.jpg",
  },
  {
    title:
      "Alquiler Departamento 2 Amb C/cochera en Torre de Categoria C/amenities - Palermo",
    adress: "Thames al 2300",
    city: "Buenos Aires",
    country: "Argentina",
    locate: "Palermo",
    description:
      "Inmejorable departamento 2 ambientes con cochera. Piso alto con vista abierta a toda la ciudad, ",
    available: false,
    meters: "63m²",
    rooms: 2,
    bathrooms: 1,
    enviroments: 1,
    category: "Departamento",
    operation: "Alquiler",
    price: 750,
    image:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/44/95/360x266/1858917896.jpg",

    image_2:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/44/95/360x266/1858917899.jpg",

    image_3:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/44/95/360x266/1858917894.jpg",

    image_4:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/44/95/360x266/1858917897.jpg",

    image_5:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/32/44/95/360x266/1858917898.jpg",

    image_6:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/35/74/02/360x266/1859587088.jpg",
  },

  {
    title: "Caba Recoleta Alquiler Departamento Ulrich Propiedades",
    adress: "Pacheco de Melo 1967",
    city: "Buenos Aires",
    country: "Argentina",
    locate: "Recoleta",
    description:
      "Lindísimo departamento en pleno recoleta. Cuenta con 3 dormitorios, 3 baños, amplios placards, hall distribuidor, living comedor en L a balcón, ",
    available: false,
    meters: "115m²",
    rooms: 4,
    bathrooms: 3,
    enviroments: 3,
    category: "Departamento",
    operation: "Alquiler",
    price: 950,
    image:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/30/03/45/360x266/1858377553.jpg",

    image_2:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/30/03/45/360x266/1858377555.jpg",

    image_3:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/30/03/45/360x266/1858377554.jpg",

    image_4:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/30/03/45/360x266/1858377568.jpg",

    image_5:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/30/03/45/360x266/1858377630.jpg",

    image_6:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/37/75/18/360x266/1860015059.jpg",
  },

  {
    title: "Departamento en Av.Libertador al 2000",
    adress: "Av.Libertador al 2000",
    city: "Buenos Aires",
    country: "Argentina",
    locate: "Palermo",
    description: "Lindísimo departamento en pleno palermo. ",
    available: false,
    meters: "175m²",
    rooms: 4,
    bathrooms: 2,
    enviroments: 3,
    category: "Departamento",
    operation: "Alquiler",
    price: 1700,
    image:
      "https://imgar.zonapropcdn.com/avisos/1/00/50/62/51/28/360x266/1838982325.jpg",

    image_2:
      "https://imgar.zonapropcdn.com/avisos/1/00/50/62/51/28/360x266/1855573310.jpg",

    image_3:
      "https://imgar.zonapropcdn.com/avisos/1/00/50/62/51/28/360x266/1838982333.jpg",

    image_4:
      "https://imgar.zonapropcdn.com/avisos/1/00/50/62/51/28/360x266/1855329697.jpg",

    image_5:
      "https://imgar.zonapropcdn.com/avisos/1/00/50/62/51/28/360x266/1838982337.jpg",

    image_6:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/10/28/44/360x266/1853834011.jpg",
  },

  {
    title: "Monoambiente",
    adress: "Junin al 969",
    city: "Buenos Aires",
    country: "Argentina",
    locate: "Recoleta",
    description:
      "-Cómodo Studio ideal para 1 o 2 personas, ubicado en una de las zonas mas lindas de Buenos Aires;.",
    available: false,
    meters: "36m²",
    rooms: 1,
    bathrooms: 1,
    enviroments: 1,
    category: "Departamento",
    operation: "Venta",
    price: 210000,
    image:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/18/14/05/360x266/1855824186.jpg",

    image_2:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/18/14/05/360x266/1855824170.jpg",

    image_3:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/18/14/05/360x266/1855824169.jpg",

    image_4:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/18/14/05/360x266/1855824185.jpg",

    image_5:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/18/14/05/360x266/1855824171.jpg",

    image_6:
      "https://imgar.zonapropcdn.com/avisos/1/00/51/37/06/99/360x266/1859880580.jpg",
  },

  {
    title: "Monoambiente en San nicolas",
    adress: "Maipu 216",
    city: "Buenos Aires",
    country: "Argentina",
    locate: "San nicolas",
    description:
      "Comodo y espacioso Departamento de 1 ambiente ideal para 2 o 3 personas, ubicado en el centro de Buenos Aires; ¡En el Barrio de Congreso! El mismo queda sobre la calle Maipú entre Tte. Gral. Juan Domingo Perón y Sarmiento",
    available: false,
    meters: "32m²",
    rooms: 1,
    bathrooms: 1,
    enviroments: 1,
    category: "Departamento",
    operation: "Venta",
    price: 140000,
    image:
      "https://imgar.zonapropcdn.com/avisos/resize/1/00/50/97/94/14/1200x1200/1858186020.jpg",

    image_2:
      "https://imgar.zonapropcdn.com/avisos/resize/1/00/50/97/94/14/1200x1200/1858186014.jpg",

    image_3:
      "https://imgar.zonapropcdn.com/avisos/resize/1/00/50/97/94/14/1200x1200/1858186007.jpg",

    image_4:
      "https://imgar.zonapropcdn.com/avisos/resize/1/00/50/97/94/14/1200x1200/1858186019.jpg",

    image_5:
      "https://imgar.zonapropcdn.com/avisos/resize/1/00/50/97/94/14/1200x1200/1858186018.jpg",

    image_6:
      "https://imgar.zonapropcdn.com/avisos/1/00/47/17/60/61/360x266/1773589374.jpg",
  },
];

const seed = () => {
  Properties.bulkCreate(array).then((property) => {
    console.log("SEED TERMINADO");
    return property;
  });
};

db.sync()
  .then(seed)
  .then(() => console.log("Todo salio bien"))
  .catch((error) => console.log("TODO SALIO MAL", error));
