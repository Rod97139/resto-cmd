import { useSelector, useStore } from "react-redux";
import { isVoucherAvailable } from "../../app/selectors";
import { cartSlice } from "../cart/cartSlice";

const Voucher = () => {
  const store = useStore();
//   const [available, setAvailable] = useState(isVoucherAvailable(store.getState()));

//   useEffect(() => {
//     store.subscribe(() => setAvailable(isVoucherAvailable(store.getState())));
//   });

const available = useSelector(isVoucherAvailable);

  return (
    <div className="Voucher">
      {available && (
        <button
          onClick={() =>
            store.dispatch(cartSlice.actions.applyVoucher({ price: 2 }))
          }
        >
          Appliquer ma promo Super crémeux à 2 euros
        </button>
      )}
    </div>
  );
};

export default Voucher;