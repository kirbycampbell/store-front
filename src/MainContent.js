import React, { useEffect } from "react";
import "./MainContent.css";
import { allSeedProductData } from "./StoreData";

const MainContent = props => {
  const productClick = id => {
    console.log(id);
  };

  const likeClick = id => {
    console.log(id);
  };

  useEffect(() => {
    console.log(props.category);
  }, [props.category]);

  const MappedProducts = () => {
    // ::::::::::::::: IF NO FIlter is Applied - Render this MAIN VIEW ::::::::::
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
                    <div
                      className="heart-like"
                      onClick={() => likeClick(product.id)}
                    >
                      <i className="fas fa-heart heart-box" />
                    </div>
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
      // ::::::::: When a Filter IS applied - render the FILTERED List :::::::::::::::
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
                    <div className="outer-img">
                      <img
                        className="prod-img"
                        src={product.image}
                        alt={product.id}
                      />
                      <div
                        className="heart-like"
                        onClick={() => likeClick(product.id)}
                      >
                        <i className="fas fa-heart heart-box" />
                      </div>
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
            } else return null;
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
