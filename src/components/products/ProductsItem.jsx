import React from 'react'
import { Link } from 'react-router-dom'
const ProductsItem = ({name,picture,price,todo}) => {
  return (
    <li><Link to={'/todo'} state={todo}>
    <img src={picture} alt="" />
    <p>{name}</p>
    <p>{price}</p>
    <p>{picture}</p>
    
</Link>
</li>
  )
}

export default ProductsItem