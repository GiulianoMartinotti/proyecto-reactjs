import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ContactContainer from './components/ContactContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:catId" element={<ItemListContainer />} />
          <Route exact path="/contact" element={<ContactContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
