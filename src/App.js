import Header from './components/Navbar/Navbar.js'
import Dashboard from './components/Dashboard/Dashboard'
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from './components/RootLayout/RootLayout'
import Cart from './components/Cart/Cart'
import ProductDetails from './components/ProductsDetails/productDetails.js';
import './App.css';
import Product from './components/Product/product'
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom'
import Counter from './components/Counter/counter.js';
import User from './components/Crud/User.js';
function App() {
  const router=createBrowserRouter(createRoutesFromElements(
     <Route path="/" element={<RootLayout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/crud" element={<User/>}></Route>
        <Route path="/products/:id" element={<ProductDetails/>}></Route>
     </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
