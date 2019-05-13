const uuidv4 = require("uuid/v4");

export function product(name, type, price, size, year, image) {
  let item = new Object();
  item.id = uuidv4();
  item.name = name;
  item.type = type;
  item.price = price;
  item.size = size;
  item.year = year;
  item.image = image;
  item.dateListed = Date.now();
  return item;
}
