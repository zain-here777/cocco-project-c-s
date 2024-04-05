import Logo from "../assets/images/logo.png";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import {useProductContext} from "../context/productContext.jsx";

function Navbar() {
const {cart} = useProductContext();

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={Logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/"><span>Home</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products"><span>Products</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about"><span>About</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact"><span>Contact</span></NavLink>
                        </li>
                    </ul>
                    <form className="search-form" role="search">
                        <div className="search-group">
                            <input className="form-control" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <div className="search-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </form>
                    <div className="nav-product-widgets">
                        <a href='#' className='wishlist-widget'>
                            <i className="dripicons-heart"></i>
                            <p>Wishlist</p>
                        </a>
                        <Link to={"/cart"} className='cart-widget'>
                            <div className='cart-status'>
                                {cart.length}
                            </div>
                            <i className="dripicons-shopping-bag"></i>
                            <p>My Bag</p>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar;