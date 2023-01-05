import React from 'react';
import { useState,useEffect } from 'react';
import { getProducto } from '../../assets/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProducto(id).then(prod =>setProducto(prod))
    }, []);
    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
