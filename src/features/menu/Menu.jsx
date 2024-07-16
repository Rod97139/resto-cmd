import { useDispatch } from "react-redux"
import * as ProductList from "../../common/models"
import ProductCard from "../../common/components/ProductCard"
const Menu = () => {
    const dispatch = useDispatch()
  return (
    <div className="Menu">
      {
        Object.values(
            ProductList
        ).map(
            product => <ProductCard key={product.name} product={product} onSelect={
                        () => dispatch({
                            type: "ADD_PRODUCT",
                            payload: product
                        })
                     } />
        )
      }
    </div>
  )
}

export default Menu
