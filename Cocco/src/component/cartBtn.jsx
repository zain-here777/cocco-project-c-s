import {Link} from "react-router-dom";
import {useProductContext} from "../context/productContext.jsx";
import axios from "axios";

function CartBtn({product}) {

    const {addToCart, quantity} = useProductContext();

    const handleCart = () => {
        addToCart(product, quantity)
        axios.post('http://localhost:4000/api/cart', {
            productId: product.id,
            name: product.name,
            quantity: product.quantity,
            price: product.price,
            images: product.images[0].src
        })
            .then(response => {
                console.log('The Products are Added to Cart', response.data)
            })
            .catch(err => {
                console.log("The Products are not Added to Cart!", err)
            })

    }
    return (
        <>
            <Link href="">
                <button className="popular-cart-btn btn" onClick={handleCart}>Add to cart
                </button>
            </Link>
        </>
    )
}

export default CartBtn;