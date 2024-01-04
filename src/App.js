import './App.css';
import PrivateComponent from './components/PrivateComponent';
import Footer from './components/Footer';
import Nav from "./components/Nav";
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element ={<PrivateComponent/>}>
          <Route path='/' element={<ProductList/>}> </Route>
          <Route path='/add' element={<AddProduct />}> </Route>
          <Route path='/update' element={<h1>Update Listing Component</h1>}> </Route>
          <Route path='/logout' element={<h1> Logout profile</h1>}> </Route>
          <Route path='/profile' element={<h1>Profile Component</h1>}> </Route>

          </Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>

        </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
