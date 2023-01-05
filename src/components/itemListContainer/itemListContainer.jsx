import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { getProductos, getProducto, updateProducto, deleteProducto, cargarBDD } from '../../assets/firebase';
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
        //cargarBDD().then(productos => console.log(productos))
        // getProducto("8IJc9tQPdsx60KPLVrch").then(prod => {
        //     prod.stock -= 5;
        //     updateProducto(prod.id, prod).then(estado => console.log(estado))
        // });
        // deleteProducto("8IJc9tQPdsx60KPLVrch").then(estado => console.log(estado))
        // getProducto("DwaOJrWLODoqa7sLICsI").then(prod => {
        //     prod.stock -= 8;
        //     delete prod.id;
        //     updateProducto("DwaOJrWLODoqa7sLICsI", prod).then(estado => console.log(estado))
        // })
    },[categories]);
    return (
        <div className="row cardProducts">{productos}</div>
    );
}

export default ItemListContainer;
