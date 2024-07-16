import { useEffect, useState } from "react";
import { useStore } from "react-redux";

const Total = () => {
    const store = useStore();
    const [list, setList] = useState(store.getState().list);

    const totalCommand = list.reduce((prv, cur) => cur.price + prv, 0);

    useEffect(() => {
        store.subscribe(() => {
            setList(store.getState().list);
        });
    });
    return <div className="TotalCommand">
        {
            list.length === 0 ? <div>Aucun produit selectionné</div> : <div>Total commande {totalCommand}€</div>
        }
    </div>
}

export default Total;