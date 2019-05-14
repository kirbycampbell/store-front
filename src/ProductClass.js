const uuidv4 = require("uuid/v4");

export function product(name, type, price, size, year, image) {
  let item = {
    id: uuidv4(),
    name: name,
    type: type,
    price: price,
    size: size,
    year: year,
    image: image,
    dateListed: Date.now()
  };

  return item;
}
