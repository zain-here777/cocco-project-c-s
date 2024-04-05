import Logo from "../assets/images/logo.png";

function Footer() {
    return (<>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className='navbar-brand'>
                            <img src={Logo} alt=""/>
                            <p className="footer-text">Lorem ipsum dolor sit amet, <br/> consectetur adipisicing elit.
                                Adipisci<br/> aperiam eum ex
                                itaque
                                iusto</p>
                            <div className="social-icons-container">
                                <a href='#' className='insta'>
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href='#' className='twitter'>
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href='#' className='facebook'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h2>Useful links</h2>
                        <ul className='footer-list'>
                            <li className="nav-item"><a href="" className="nav-link">How it works</a></li>
                            <li className="nav-item"><a href="" className="nav-link">About us</a></li>
                            <li className="nav-item"><a href="" className="nav-link">Babysitters</a></li>
                            <li className="nav-item"><a href="" className="nav-link">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h2>My Account</h2>
                        <ul className='footer-list'>
                            <li className="nav-item"><a href="" className="nav-link">Track my order</a></li>
                            <li className="nav-item"><a href="" className="nav-link">Terms of use</a></li>
                            <li className="nav-item"><a href="" className="nav-link">Wishlist</a></li>
                            <li className="nav-item"><a href="" className="nav-link">Submit your feedback</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h2>Customer Services</h2>
                        <ul className='footer-list'>
                            <li className="nav-item"><a href="" className="nav-link">Help $ Contact Us</a></li>
                            <li className="nav-item"><a href="" className="nav-link">Return and Refunds</a></li>
                            <li className="nav-item"><a href="" className="nav-link">Online Stores</a></li>
                            <li className="nav-item"><a href="" className="nav-link">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>)
}

export default Footer;