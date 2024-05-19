const products = [
  {
    id: 1,
    category: "men",
    title: "Franela Blanca",
    stock: 10,
    price: "20$",
    description: "Tallas: XL, L, M, S, XS",
    image:
      "https://img.freepik.com/foto-gratis/hombre-joven-serio-que-coloca-aislado-sobre-pared-amarilla_171337-16803.jpg?t=st=1716048550~exp=1716052150~hmac=adb59a136b8457985cca890cf64340b40fd7ebdbcca61c84e763bb1c5158133a&w=740",
  },
  {
    id: 2,
    category: "men",
    title: "Franela Estampada",
    stock: 7,
    price: "5$",
    description: "Tallas: XL, L, M, S, XS",
    image:
      "https://img.freepik.com/foto-gratis/salvavidas-tiro-medio-fondo-verde_23-2149461842.jpg?t=st=1716067679~exp=1716071279~hmac=35a236a12c829d1dac6275d3f4f13ec5fe9ee11a14be60238d6db0b0619e7f18&w=740",
  },
  {
    id: 3,
    category: "men",
    title: "Franela Negra",
    stock: 3,
    price: "10$",
    description: "Tallas: XL, L, M, S, XS",
    image:
      "https://img.freepik.com/foto-gratis/hombre-vista-frontal-sentado-motocicleta_23-2148703196.jpg?t=st=1716067758~exp=1716071358~hmac=12866ab4b3700284207aa27d9c766ca23276fa4d73563da7484a5818872d7a22&w=740",
  },
  {
    id: 4,
    category: "women",
    title: "Franela Blanca",
    stock: 6,
    price: "5$",
    description: "Tallas: XL, L, M, S, XS",
    image:
      "https://img.freepik.com/foto-gratis/hermosa-modelo-sonriente-vestida-ropa-hipster-verano-chica-despreocupada-sexy-posando-estudio-junto-pared-azul-shorts-jeans-mujer-moda-divertida-tomando-fotos-autorretrato-selfie-telefono-inteligente_158538-15813.jpg?w=740&t=st=1716139718~exp=1716140318~hmac=cd1a92fc8029b0da5315cb440e689998ddfa66c59452f1a5a8f43190ccfa6171",
  },

  {
    id: 5,
    category: "women",
    title: "Franela Beige",
    stock: 16,
    price: "7$",
    description: "Tallas: XL, L, M, S, XS",
    image:
      "https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-cortos-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-azul-hace-cara-pato_158538-15831.jpg?t=st=1716139800~exp=1716143400~hmac=892b5a0021559f5c670a36a6f31fe6e39d8b532648b9a5828c6a259a8a8186ad&w=740",
  },
  {
    id: 6,
    category: "women",
    title: "Franela Azul",
    stock: 8,
    price: "6$",
    description: "Tallas: XL, L, M, S, XS",
    image:
      "https://img.freepik.com/foto-gratis/joven-hermosa-mujer-morena-confiada-chaqueta-dorada-noche-moda-mujer-despreocupada-sexy-posando-junto-pared-rosa-estudio-modelo-moda-maquillaje-brillante-mira-camara-brazos-cruzados_158538-22858.jpg?w=740&t=st=1716139933~exp=1716140533~hmac=bf9901bc80e770a9e7264b4d36206cd83963171e317454d9e877a7ea9d879f54",
  },
  {
    id: 7,
    category: "shoes",
    title: "Adidas men",
    stock: 10,
    price: "66$",
    description: "Tallas: XL, L, M, S, XS",
    image:
      "https://img.freepik.com/foto-gratis/primer-plano-zapatillas-futuristas_23-2151005717.jpg?t=st=1716107211~exp=1716110811~hmac=c04185f12cba457c57fbcd7d930dea361426e7995dc161ca1008806bf6eadfd8&w=740",
  },
  {
    id: 8,
    category: "shoes",
    title: "Adidas women",
    stock: 10,
    price: "46$",
    description: "Tallas: XL, L, M, S, XS",
    image:
      "https://img.freepik.com/foto-gratis/primer-plano-zapatillas-futuristas_23-2151005654.jpg?t=st=1716107262~exp=1716110862~hmac=cfcbf7a4cd3c94816a4750475f78aec831033a87b737114db5daa1f2720bf3a4&w=740",
  },
  {
    id: 9,
    category: "shoes",
    title: "Timberland men",
    stock: 10,
    price: "146$",
    description: "Tallas: XL, L, M, S, XS",
    image:
      "https://img.freepik.com/foto-gratis/pie-masculino-zapatos-cuero-marron-jeans_1150-6003.jpg?t=st=1716107365~exp=1716110965~hmac=5e264afb8fc155450ff34d12cdb96867b8dcc659bf70d69e8d3efb9ddc87ac97&w=740",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProduct = (id) => {
  return products.find((prod)=> prod.id == id);
}