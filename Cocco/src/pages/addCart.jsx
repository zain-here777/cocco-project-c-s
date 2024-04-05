import BreadCrumbsSec from "../component/breadCrumbsSec.jsx";
import {useProductContext} from "../context/productContext.jsx";
import {Link} from "react-router-dom";

function AddCart() {
    const {cart ,setCart } = useProductContext();

    const removeProductFromCart = (productID ) => {
       const  updatedCart = cart.filter(product => product.id !== productID);
       localStorage.setItem('Cart', JSON.stringify(updatedCart))
        setCart(updatedCart)
    }
    return (
        <>
            <BreadCrumbsSec text='Cart'/>
            <div className="container">
                <table className="table cart-table my-5">
                    <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Array.isArray(cart) && cart.map((product, index) => (
                            <tr key={index} className='cart-row'>
                                <td scope="row">
                                    <i onClick={() => removeProductFromCart(product.id)} className="fa-solid fa-xmark"></i>
                                </td>
                                <td>
                                    <div className='cart-product'>

                                                <img src={product.images[0].src} alt="" style={{maxWidth: '80px'}}/>

                                        <p>{product.name}</p>
                                    </div>
                                </td>
                                <td><p>${product.price}</p>
                                </td>
                                <td>
                                    {product.quantity}
                                </td>
                                <td><p>${product.price * product.quantity}</p></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <Link to='/checkout'><button className='btn popular-cart-btn'>Proceed to Checkout</button></Link>
            </div>

        </>
    )
}

export default AddCart