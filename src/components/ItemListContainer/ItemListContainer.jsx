import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { getProductos } from '../../assets/firebase';
const ItemListContainer = () => {
    const [productos, setProducts] = useState([]);
    const {categories} = useParams();
    useEffect(() => {
        if(categories){
            getProductos().then(products => {
                const productList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === categories)
                const cardProduct = ItemList({productList});
                setProducts(cardProduct)
        })
        } else{
            getProductos().then(products => {
                const productList = products.filter(prod => prod.stock > 0)
                const cardProduct = ItemList({productList})
                setProducts(cardProduct)
        })
        }
    },[categories]);
    return (
        <div className="row cardProducts">{productos}</div>
    );
}

export default ItemListContainer;
