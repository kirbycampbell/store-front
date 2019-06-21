import React from "react";
import "./ProductPage.css";

const ProductPage = props => {
  return (
    <div>
      <div
        className="Outer-Product"
        onClick={() => props.productViewSwitch(22)}
      />
      <div className="Product-Box">
        <div className="Inner-Box">Test Inner</div>
      </div>
    </div>
  );
};

export default ProductPage;
