const productTotalNumbers = 25;

let products = [];

for (let i = 1; i <= productTotalNumbers; i++) {
  const imgNum = i < 10 ? `0${i}` : i;
  products = products.concat({ imgUrl: `../../assets/img/img-${imgNum}` });
}

export default products;
