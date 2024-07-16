import { useSelector, useStore } from "react-redux";
import { isVoucherAvailable } from "../../app/selectors";

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
            store.dispatch({ type: "APPLY_VOUCHER", payload: { price: 2 } })
          }
        >
          Appliquer ma promo Super crémeux à 2 euros
        </button>
      )}
    </div>
  );
};

export default Voucher;