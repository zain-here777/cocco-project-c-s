import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/index.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Products from "./pages/products.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import ProductDetail from "./pages/productDetail.jsx";
import AddCart from "./pages/addCart.jsx";
import Checkout from "./pages/checkout.jsx";


function App() {
    return (
        <Router>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="cart" element={<AddCart/>}/>
                    <Route path="checkout" element={<Checkout/>}/>
                    <Route path="product/:id" element={<ProductDetail/>}/>
                </Routes>
            <Footer/>
        </Router>
    )
}

export default App
