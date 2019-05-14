import React from "react";
import "./FilterBar.css";

const FilterBar = props => {
  const handleFilterClick = e => {
    props.setCategory(e);
  };
  return (
    <div className="filter-bar-outer">
      <div className="divider" />
      <div className="filter-item" onClick={() => handleFilterClick("All")}>
        All
      </div>
      <div className="divider" />
      <div className="filter-item" onClick={() => handleFilterClick("Tops")}>
        Tops
      </div>
      <div className="divider" />
      <div className="filter-item" onClick={() => handleFilterClick("Bottoms")}>
        Bottoms
      </div>
      <div className="divider" />
      <div
        className="filter-item"
        onClick={() => handleFilterClick("Underwear")}
      >
        Underwear
      </div>
      <div className="divider" />
      <div
        className="filter-item"
        onClick={() => handleFilterClick("Miscellaneous")}
      >
        Miscellaneous
      </div>
      <div className="divider" />
    </div>
  );
};

export default FilterBar;
