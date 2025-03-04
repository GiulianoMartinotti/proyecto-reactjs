import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ProductDetail';
import { CartProvider } from './context/CartContext';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar/> 
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:catId' element={<ItemListContainer />} />
            <Route exact path='/product/:id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App
