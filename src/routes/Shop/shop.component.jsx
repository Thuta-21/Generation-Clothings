import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCart from "../../components/productCard/productCard.component";
import './shop.style.scss';

const Shop = () => {

    const { products } = useContext(ProductsContext)
  return (
    <>
      <div className="products-container">
        {products.map(product => {
            return <ProductCart product={product} key={product.id}/>
        })}
      </div>
    </>
  )
}

export default Shop;