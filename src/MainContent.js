import React, { useEffect } from "react";
import "./MainContent.css";
import { allSeedProductData } from "./StoreData";

const MainContent = props => {
  const productClick = id => {
    console.log(id);
  };

  useEffect(() => {
    console.log(props.category);
  }, [props.category]);

  const MappedProducts = () => {
    if (props.category === "" || props.category === "All") {
      return (
        <div className="outer-cont">
          {allSeedProductData.map(product => {
            return (
              <div
                key={product.id}
                className="card-cont"
                onClick={() => productClick(product.id)}
              >
                <div className="card">
                  <div className="outer-img">
                    <img
                      className="prod-img"
                      src={product.image}
                      alt={product.id}
                    />
                  </div>
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
      );
    } else if (props.category !== "" && props.category !== "All") {
      return (
        <div className="outer-cont">
          {allSeedProductData.map(product => {
            if (product.type === props.category) {
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
            }
          })}
        </div>
      );
    }
  };

  return (
    <div className="App">
      <MappedProducts />
    </div>
  );
};

export default MainContent;
