import Checkout from '../Checkout/Checkout';
import { Link } from 'react-router-dom';
const Cart = () => {
    return (
        <div>
            <h1>Productos</h1>
            <Link to={'/checkout'}><button className='btn btn-primary'>Finalizar compra</button></Link>
        </div>
    );
}

export default Cart;
