import React from "react";
import "./ProductPage.css";
import { allSeedProductData } from "../101 SeedData/StoreData";

const ProductPage = props => {
  // Assigns selectedProduct to the full Product Data
  const selectedProduct = allSeedProductData.find(product => {
    if (product.id === props.productChosen) {
      return product;
    } else {
      return null;
    }
  });

  return (
    <div>
      <div
        className="Outer-Product"
        onClick={() => props.productViewSwitch(22)}
      />
      <div className="Product-Box">
        <div className="x-out" onClick={() => props.productViewSwitch(22)}>
          <i className="fas fa-times icons-x" />
        </div>

        <div className="Inner-Box">
          <div className="big-img-box">
            <img
              className="img-itself"
              src={selectedProduct.image}
              alt={selectedProduct.id}
            />
          </div>
          <div className="detail-side">
            <div className="big-title">
              {selectedProduct.year} {selectedProduct.name}
            </div>

            <div className="big-details">
              <div className="descr">
                This item is made with 100% polyester.
              </div>
              <div className="descr">
                We only source our materials from fair trade, living wage
                companies.
              </div>
              <div className="descr">
                This is a sample description, so it will appear on every
                product!
              </div>
              <div className="outer-details">
                <div className="b-prod-price">${selectedProduct.price}</div>
                <div className="b-prod-size">{selectedProduct.size}</div>
              </div>
            </div>
          </div>

          {/* <div
            className="cart-icon-box"
            onClick={() => props.likeClick(props.productChosen)}
          >
            <i className="fas fa-shopping-cart icons" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
