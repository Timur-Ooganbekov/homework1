import React from "react";
import { Link } from "react-router-dom";
const ProductsItem = ({ name, picture, price, product }) => {
  return (
    <li>
      <Link to={"/product"} state={product}>
        <img src={picture} alt="" />
        <p>{name}</p>
        <p>{price}</p>
      </Link>
    </li>
  );
};

export default ProductsItem;
