import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from '../../assets/firebase';
import {useCarritoContext} from '../../context/CarritoContext';
import { useState } from 'react';

const Checkout = () => {
const {totalPrice, carrito, emptyCart} = useCarritoContext();
    const datosFormulario = React.useRef();
    let navigate = useNavigate();
    const [cliente, setCliente] = useState({});

    const datosCliente = (e) => {
        setCliente({
        ...cliente,
        [e.target.name]: e.target.value,
        });
    };

    const consultarFormulario = (e)=>{
        e.preventDefault()
        console.log(datosFormulario)
        const datosForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datosForm);
        const aux= [...carrito]
        aux.forEach(prodCarrito =>{
            getProducto(prodCarrito.id).then(prodBDD =>{
                if(prodBDD.stock >= prodCarrito.cant){
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)
                }else {
                    toast.error(`Lo sentimos, el producto ${prodBDD}, se encuentra fuera de stock`)
                    emptyCart();
                }
            })
        })

        createOrdenCompra(cliente, totalPrice(), new Date().toISOString().slice(0, 10)).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item =>{
                toast.success(`Su compra ha sido realizada con éxito. Su orden es ${item.id}`)
                emptyCart()
                e.target.reset();
                navigate("/");
            }).catch(error => {
                toast.error("Lo sentimos, hubo un inconveniente con la operación")
                console.error(error)
            })
        })
    }

    const finalizarCompra = (e) => {
        if (Object.values(cliente).length !== 5) {
        e.preventDefault();
        toast.error("Es necesario que todos los campos sean completados")
        } else{
            createOrdenCompra();
        }
    };

    return (
    <div className='container'>
    <form onSubmit={consultarFormulario} ref={datosFormulario}>
    <div className="form-group">
        <label htmlFor="nombre" className="form-label mt-4">Nombre y apellido</label>
        <input type="text" className="form-control" name='nombre' placeholder="Ingrese nombre y apellido" onChange={datosCliente}/>
    </div>
    <div className="form-group">
        <label htmlFor="email" className="form-label mt-4">Email</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" name='email' placeholder="Ingrese email" onChange={datosCliente}/>
    </div>
    <div className="form-group">
        <label htmlFor="dni" className="form-label mt-4">DNI</label>
        <input type="number" className="form-control" name='dni' placeholder="Ingrese DNI" onChange={datosCliente}/>
    </div>
    <div className="form-group">
        <label htmlFor="telefono" className="form-label mt-4">Número telefónico</label>
        <input type="number" className="form-control" name='telefono' placeholder="Ingrese número telefónico" onChange={datosCliente}/>
    </div>
    <div className="form-group">
        <label htmlFor="direccion" className="form-label mt-4">Dirección</label>
        <input type="text" className="form-control" name='direccion' placeholder="Ingrese dirección" onChange={datosCliente}/>
    </div>
    <div>
        <button type='submit' className='btn btn-primary my-4' onClick={finalizarCompra}>Finalizar compra</button>
    </div>
    </form>
    </div>
    );
}

export default Checkout;

