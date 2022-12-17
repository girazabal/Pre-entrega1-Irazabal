import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';
const Cart = () => {

    const {carrito} = useCarritoContext()
    return (
        <>
        {carrito.length === 0 ?
        <>
            <h1>Carrito vacío</h1>
            <Link to={'/'}><button className='btn btn-primary'>Continuar comprando</button></Link>
        </>
        :
        <><Link to={'/checkout'}><button className='btn btn-primary'>Finalizar compra</button></Link>
        <Link to={'/'}><button className='btn btn-primary'>Continuar comprando</button></Link></>
        }
        </>
    );
}

export default Cart;
