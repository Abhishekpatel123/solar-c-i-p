import React from "react";
import Card from "./Card";
import ptData from "../../data/productType";
import "./ProductType.scss";

function ProductType() {
  return (
    <div className="pt-type">
      <div className="content">
        {ptData.map(({ title, image }) => (
          <Card title={title} image={image} key={title} />
        ))}
      </div>
    </div>
  );
}

export default ProductType;
