import './App.css';
import PrivateComponent from './components/PrivateComponent';
import Footer from './components/Footer';
import Nav from "./components/Nav";
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element ={<PrivateComponent/>}>
          <Route path='/' element={<h1>Product Listing Component</h1>}> </Route>
          <Route path='/add' element={<h1>Add Product Component</h1>}> </Route>
          <Route path='/update' element={<h1>Update Listing Component</h1>}> </Route>
          <Route path='/logout' element={<h1> Logout profile</h1>}> </Route>
          <Route path='/profile' element={<h1>Profile Component</h1>}> </Route>

          </Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
