import React from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';
import ItemCount from '../ItemCount/ItemCount';
import { useCarritoContext } from '../../context/CarritoContext';
const ItemDetail = ({item}) => {
    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()

    const onAdd = (contador) => {
        addItem(item, contador)
    }

    return (
        <div className={`${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
            <div className='row my-2'>
            <img src={`../img/${item.img}`} alt="" className='img-fluid rounded-start'/>
            </div>
            <div>
            <h5 className='card-title'>{item.nombre}</h5>
            <p className='card-text'>Modelo: {item.modelo}</p>
            <p className='card-text'>Marca: {item.marca}</p>
            <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
            <p className='card-text'>Descripción: {item.descripcion}</p>
            <p className='card-text'>Stock: {item.stock}</p>
            <ItemCount inicial={1} stock={item.stock} onAdd={onAdd}/><br/>
            <button className='btn btn-primary'>Finalizar compra</button>
            </div>
        </div>
    );
}

export default ItemDetail;
