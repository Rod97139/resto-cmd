import { useDispatch } from "react-redux"
import * as ProductList from "../../common/models"
import ProductCard from "../../common/components/ProductCard"
import { cartSlice } from "../cart/cartSlice"
import { getListQuantityProductPerName } from "../../app/selectors"


const Menu = () => {
    const dispatch = useDispatch()
    const addProductThunk = (product) => (dispatch, getState) => {
      dispatch(cartSlice.actions.addProduct(product));
      return new Promise((resolve) => {
        setTimeout(() => {
          const state = getState();
          const numberProductPerName = getListQuantityProductPerName(state);
            const numberForSpecialOffer = numberProductPerName.find((item) => item.title === "Poulet Croquant")?.quantity;
          if (numberForSpecialOffer === 2) {
              window.confirm("Voulez-vous ajouter une troisième fois ce produit à moitié prix ?")
  
              const specialOffer = ProductList.PouletCroquant
                dispatch(cartSlice.actions.addProduct({...specialOffer, price:       Math.round((ProductList.PouletCroquant.price / 2) * 100) / 100}));
          }
          resolve();
        }, 1000)
      });
    }
    
  return (
    <div className="Menu">
      {
        Object.values(
            ProductList
        ).map(
            product => <ProductCard key={product.name} product={product} onSelect={
                        () => dispatch(addProductThunk(product))
                     } />
        )
      }
    </div>
  )
}

export default Menu
