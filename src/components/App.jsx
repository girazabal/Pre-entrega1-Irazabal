//Importaciones
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Componentes
import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
// import Item from './item/item';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categories/:categories' element={<ItemListContainer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
