import { useSelector } from "react-redux";
import { getProductList, getTotalOrder } from "../../app/selectors";

const Total = () => {
    const list = useSelector(getProductList);

    const totalCommand = useSelector(getTotalOrder);

    return <div className="TotalCommand">
        {list.length === 0 ? <div>Aucun produit sélectionné</div> : <div>Total commande {totalCommand} euros</div>}
    </div>
};

export default Total;