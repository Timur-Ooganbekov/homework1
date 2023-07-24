import React from 'react'
import ProductsItem from './ProductsItem'

const ProductsList = ({products}) => {

  return (
    <ul className='list'>
      {products.map( (product) => 
        <ProductsItem key={product._id}
         {...product} product={product}/>)}
         </ul>
  )
}

export default ProductsList