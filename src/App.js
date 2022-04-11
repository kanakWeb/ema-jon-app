import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
     <Header></Header> 
     <Routes>
       <Route path="/" element={<Shop></Shop>}></Route>
       <Route path="/shop" element={<Shop></Shop>}></Route>
       <Route path="/orders" element={<Orders></Orders>}></Route>
       <Route path="/inventory" element={
         <RequireAuth><Inventory></Inventory></RequireAuth>
       }></Route>
       <Route path='/shipment' element={
         <RequireAuth><Shipment></Shipment></RequireAuth>
       }></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
     </Routes>
     <Footer></Footer>
 
    </div>
  );
}

export default App;
