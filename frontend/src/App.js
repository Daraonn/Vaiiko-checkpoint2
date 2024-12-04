
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Navbar} from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Shopcategory from './Pages/Shopcategory';
import ContextShopProvider from './Context/contextShop';

function App() {
  return (
    <div>
      <ContextShopProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/laptop' element={<Shopcategory category = 'laptop'/>}/>
        <Route path='/mobil' element={<Shopcategory category = 'mobil'/>}/>
        <Route path='/monitor' element={<Shopcategory category = 'monitor'/>}/>
        <Route path='/desktop' element={<Shopcategory category = 'desktop'/>}/>
        <Route path='/accessories' element={<Shopcategory category = 'accessories'/>}/>
        <Route path='/product/:productID' element={<Product />} />
      </Routes>
      </BrowserRouter>
      </ContextShopProvider>

    </div>
  );
}

export default App;
