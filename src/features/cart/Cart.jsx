import { useStore } from "react-redux";


const Cart = () => {
    const store = useStore();

    return (
            <div className="Selection">
                <h1>Vos produits selectionnés</h1>
                {
                    store.getState().list.map(
                        (item, index) => <span key={index} className="SelectedProduct">{item.title} {item.price}</span>
                    )
                }
            </div>
    );
}

export default Cart;