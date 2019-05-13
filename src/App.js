import React from "react";
import "./App.css";
import { allSeedProductData } from "./StoreData";
import Footer from "./Footer";

function App() {
  console.log(allSeedProductData);

  const productClick = id => {
    console.log(id);
  };
  return (
    <div>
      <div className="navbar">Vantage Vintage</div>
      <div className="App">
        <div className="outer-cont">
          {allSeedProductData.map(product => {
            return (
              <div
                key={product.id}
                className="card-cont"
                onClick={() => productClick(product.id)}
              >
                <div className="card">
                  <img
                    className="prod-img"
                    src={product.image}
                    alt={product.id}
                  />
                  <div className="prod-title">{product.name}</div>
                  <p>{product.price}</p>
                  <p>{product.size}</p>
                  <p>{product.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
