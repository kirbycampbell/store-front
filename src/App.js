import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { allSeedProductData } from "./StoreData";

function App() {
  console.log(allSeedProductData);

  const productClick = id => {
    console.log(id);
  };
  return (
    <div className="App">
      <div className="navbar">Vantage Vintage</div>
      {/* <img
        className="imgager"
        src="https://cdn.shopify.com/s/files/1/1132/5272/products/Dawn_a05aa900-3f5a-42d9-8170-0b6d07c4330a_2048x2048.jpg?v=1536795524"
        alt="dress"
      />
      <img
        className="imgager"
        src="https://cdn.shopify.com/s/files/1/1132/5272/products/Sage_5536330b-009e-4941-9f5e-e385b9c781c9_2048x2048.jpg?v=1555432153"
        alt="sagedress"
      /> */}
      <div className="outer-cont">
        {allSeedProductData.map(product => {
          return (
            <div
              key={product.id}
              className="card-cont"
              onClick={() => productClick(product.id)}
            >
              <div className="card">
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <p>{product.size}</p>
                <p>{product.year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
