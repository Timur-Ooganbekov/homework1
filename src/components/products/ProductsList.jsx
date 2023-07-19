import React from 'react'
import ProductsItem from './ProductsItem'

const ProductsList = ({todos}) => {
   
  return (
    <ul className='list'>{todos.map( (todo) => <ProductsItem key={todo.id} {...todo} todo={todo}/>)}</ul>
  )
}

export default ProductsList