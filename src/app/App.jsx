import { Provider } from 'react-redux'
import { store } from './store';
import './App.css';
import Cart from '../features/cart/Cart.jsx';
import Total from '../features/total/Total.jsx';

function App() {
 return (
    <Provider store={store}>
        <div className="App">
            <Cart />
            <Total />
        </div>
    </Provider>
 );
}

export default App;