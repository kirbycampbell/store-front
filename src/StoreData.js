import { product } from "./ProductClass";

// export function product(name, type, price, size, year) {

const product1 = product("Floral Summer Dress", "Dress", 65, "Small", 1995);
const product2 = product("Button Up Denim Shirt", "Shirt", 95, "Medium", 1999);
const product3 = product(
  "Bell Bottom Jinkos",
  "Pants",
  229,
  "Extra Large",
  2002
);
const product4 = product(
  "High Wasted Track Shorts",
  "Shorts",
  38,
  "Extra Small",
  2006
);
const product5 = product("Nike Underwear", "Underwear", 9, "Extra Large", 2002);
const product6 = product("Low Wasted Gym Shorts", "Shorts", 23, "Small", 2001);

export const allSeedProductData = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6
];
