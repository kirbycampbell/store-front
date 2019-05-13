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
                  <div className="detail-outer">
                    <div className="prod-title">
                      {product.year} {product.name}
                    </div>
                    <div className="prod-details">
                      <p className="prod-price">${product.price}</p>
                      <p className="prod-size">{product.size}</p>
                    </div>
                  </div>
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
