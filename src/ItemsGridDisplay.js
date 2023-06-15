import React from "react";
import "./ItemsGridDisplay.css";

// Source:
//     https://dirask.com/posts/JavaScript-create-string-shortcut-10WRlj
//

const CUTTING_EXPRESSION = /\s+[^\s]*$/;

const createShortcut = (text, limit) => {
  if (text.length > limit) {
    const part = text.slice(0, limit - 3);
    if (part.match(CUTTING_EXPRESSION)) {
      return part.replace(CUTTING_EXPRESSION, " ...");
    }
    return part + "...";
  }
  return text;
};

function ItemDisplay(props) {
  return (
    <div className="product-item">
      <img src={props.product.image} alt={props.product.title} />
      <h3>{createShortcut(props.product.title, 40)}</h3>
      <p>${props.product.price}</p>
    </div>
  );
}

const ItemsGridDisplay = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ItemDisplay key={product.id} product={product}></ItemDisplay>
      ))}
    </div>
  );
};

export default ItemsGridDisplay;
