import { useDispatch } from "react-redux"
import * as ProductList from "../../common/models"
import ProductCard from "../../common/components/ProductCard"
import { addProduct } from "../../app/store"
const Menu = () => {
    const dispatch = useDispatch()
  return (
    <div className="Menu">
      {
        Object.values(
            ProductList
        ).map(
            product => <ProductCard key={product.name} product={product} onSelect={
                        () => dispatch(addProduct(product))
                     } />
        )
      }
    </div>
  )
}

export default Menu
