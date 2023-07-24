import React from 'react'
import { useLocation } from 'react-router-dom'

const Product= () => {
    const location=useLocation()
    const product = location.state
  return (
    <div>
<img src={product.picture} alt="" />
        <p>{product.name}</p>
        <p>{product.price}</p>
    </div>
  )
}

export default Product