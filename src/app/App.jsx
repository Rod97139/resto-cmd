import { Provider } from 'react-redux'
import { store } from './store';
import './App.css';
import Cart from '../features/cart/Cart.jsx';
import Total from '../features/total/Total.jsx';
import Voucher from '../features/voucher/Voucher.jsx';
import Owner from '../features/owner/Owner.jsx';
import Menu from '../features/menu/Menu.jsx';
import Notes from '../features/notes/Notes.jsx';
import Fidelity from '../features/fidelity/Fidelity.jsx';

function App() {
 return (
    <Provider store={store}>
        <div className="App">
            <Menu />
            <Cart />
            <Total />
            <Voucher />
            <Owner />
            <Fidelity />
        </div>
    </Provider>
 );
}

export default App;