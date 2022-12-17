import React from 'react';

const Checkout = () => {

    const datosFormulario = React.useRef()
    const consultarFormulario = (e)=>{
        e.preventDefault()
        console.log(datosFormulario)
        const datosForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datosForm)
        console.log(cliente)
    }

    return (
    <div className='container'>
    <form onSubmit={consultarFormulario} ref={datosFormulario}>
    <div className="form-group">
        <label htmlFor="nombre" className="form-label mt-4">Nombre y apellido</label>
        <input type="text" className="form-control" name='nombre' placeholder="Ingrese nombre y apellido"/>
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Ingrese email" />
    </div>
    <div className="form-group">
        <label htmlFor="DNI" className="form-label mt-4">DNI</label>
        <input type="number" className="form-control" name='DNI' placeholder="Ingrese DNI"/>
    </div>
    <div className="form-group">
        <label htmlFor="telefono" className="form-label mt-4">Número telefónico</label>
        <input type="number" className="form-control" name='telefono' placeholder="Ingrese número telefónico" />
    </div>
    <div className="form-group">
        <label htmlFor="direccion" className="form-label mt-4">Dirección</label>
        <input type="text" className="form-control" name='direccion' placeholder="Ingrese dirección" />
    </div>
    <div>
        <button type='submit' className='btn btn-primary my-4'>Finalizar compra</button>
    </div>
    </form>
    </div>
    );
}

export default Checkout;

