import { Provider } from 'react-redux'
import { store } from './store';
import './App.css';
import Cart from '../features/cart/Cart.jsx';
import Total from '../features/total/Total.jsx';
import Voucher from '../features/voucher/Voucher.jsx';

function App() {
 return (
    <Provider store={store}>
        <div className="App">
            <Cart />
            <Total />
            <Voucher />
        </div>
    </Provider>
 );
}

export default App;