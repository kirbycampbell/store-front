import React from "react";

const LikedView = props => {
  return props.allSeedProductData.map(product => {
    let found = props.likeList.find(i => i === product.id);
    if (found) {
      return (
        <div
          key={product.id}
          className="card-cont"
          onClick={() => props.productClick(product.id)}
        >
          <div className="card">
            <div className="outer-img">
              <img className="prod-img" src={product.image} alt={product.id} />
              <div
                className="heart-like"
                onClick={() => props.likeClick(product.id)}
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
  });
};

export default LikedView;
