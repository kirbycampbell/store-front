import React, { useEffect } from "react";
import "./MainContent.css";
import LikedView from "../17 LikePage/LikedView";
import FilteredList from "../FilteredList";
import MainProductList from "./MainProductList";
import { allSeedProductData } from "../101 SeedData/StoreData";

const MainContent = props => {
  const productClick = id => {
    console.log(id);
  };

  const likeClick = id => {
    let newLikeList = props.likeList.filter(item => item !== id);
    props.setLikeList([...newLikeList, id]);
  };

  useEffect(() => {
    console.log(props.category);
  }, [props.category]);

  const MappedProducts = () => {
    // ::::::::::::::: IF NO FIlter is Applied - Render this MAIN VIEW ::::::::::
    if (props.category === "" || props.category === "All") {
      return (
        <div className="outer-cont">
          <MainProductList
            productClick={productClick}
            likeClick={likeClick}
            allSeedProductData={allSeedProductData}
          />
        </div>
      );
    } else if (
      props.category !== "" &&
      props.category !== "All" &&
      props.category !== "liked"
    ) {
      // ::::::::: When a Filter IS applied - render the FILTERED List :::::::::::::::
      return (
        <div className="outer-cont">
          <FilteredList
            productClick={productClick}
            likeClick={likeClick}
            category={props.category}
            allSeedProductData={allSeedProductData}
          />
        </div>
      );
    } else if (props.category === "liked") {
      return (
        <div className="outer-cont">
          <LikedView
            productClick={productClick}
            likeClick={likeClick}
            likeList={props.likeList}
            allSeedProductData={allSeedProductData}
          />
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
