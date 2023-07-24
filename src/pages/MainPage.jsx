import ProductsList from "../components/products/ProductsList"
import products from "../json/product.json"

const MainPage = () => {
  return (
      <div>
        <ProductsList products={products}/>
      </div>
  )
}

export default MainPage