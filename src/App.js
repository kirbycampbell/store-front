import React, { useState } from "react";
import "./App.css";
import Footer from "./99 Footers/Footer";
import NavBar from "./01 NavBar/NavBar";
import FilterBar from "./21 Filter/FilterBar";
import MainContent from "./05 MainPage/MainContent";
import ProductPage from "./11 ProductPage/ProductPage";

function App() {
  const [category, setCategory] = useState("");
  const [likeList, setLikeList] = useState([]);
  const [productView, setProductView] = useState(false);
  const [productChosen, setProductChosen] = useState("");

  const handleLikeFilter = () => {
    setCategory("liked");
  };

  const productViewSwitch = id => {
    setProductView(!productView);
    setProductChosen(id);
  };

  return (
    <div>
      {/* :::::::::::: Product View Modal :::::::::::: */}
      {productView && (
        <div>
          <ProductPage
            productChosen={productChosen}
            productViewSwitch={productViewSwitch}
          />
        </div>
      )}

      <div className={productView ? "Modal-Outer" : "no-modal"}>
        <NavBar likeList={likeList} handleLikeFilter={handleLikeFilter} />
        <FilterBar setCategory={setCategory} />
        <MainContent
          category={category}
          setLikeList={setLikeList}
          likeList={likeList}
          productViewSwitch={productViewSwitch}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
