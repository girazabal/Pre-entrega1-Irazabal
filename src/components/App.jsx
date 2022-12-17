//Importaciones
import './App.css';
//Router-DOM
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Context
import { DarkModeProvider } from '../context/DarkModeContext';

//Componentes
import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <DarkModeProvider>
    <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categories/:categories' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </DarkModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
