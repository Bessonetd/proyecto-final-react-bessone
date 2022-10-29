import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bievenido a Entre Hilos y Pinceles" />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="Bienvendio a " />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
