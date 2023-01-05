
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, getDoc, collection, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "nivel-x.firebaseapp.com",
  projectId: "nivel-x",
  storageBucket: "nivel-x.appspot.com",
  messagingSenderId: "947176504746",
  appId: "1:947176504746:web:4604864353251863ec7fd3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const cargarBDD = async () => {
    const promise = await fetch('./json/products.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"),{ //collection consulta, y si no existe, crea.
        nombre: prod.nombre,
        marca: prod.marca,
        modelo: prod.modelo,
        idCategoria: prod.idCategoria,
        stock: prod.stock,
        precio: prod.precio,
        img: prod.img
        })
    })
}
// CURD - Create, Update, Read y Delete
const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"));
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

const getProducto = async (id)=> {
    const producto = await getDoc(doc(db, "productos", id));
    const item = {...producto.data(), id: producto.id};
    return item
}

const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db, "productos", id), info);
    return estado;
}

const deleteProducto = async (id) => {
    const estado = await deleteDoc(doc(db, "productos", id));
    return estado;
}

//Orden de compra - CURD

    const createOrdenCompra = async (cliente, preTotal, fecha ) => {
        const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
            nombreCompleto: cliente.nombre,
            email: cliente.email,
            dni: cliente.dni,
            direccion: cliente.direccion,
            telefono: cliente.telefono,
            fecha: fecha,
            precioTotal: preTotal
        })
        return ordenCompra;
    }

    const getOrdenCompra =  async (id)=> {
        const ordenCompra = await getDoc(doc(db, "ordenCompra", id));
        const item = {...ordenCompra.data(), id: ordenCompra.id};
        return item
    }

export {cargarBDD, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}