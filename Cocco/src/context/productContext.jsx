import {createContext, useContext, useState, useEffect} from 'react';
import axios from 'axios';

const ProductContext = createContext();


// To Store the Data in Local Storage //
const updateJson = () => {
    const updateItem = localStorage.getItem("Cart")
    if (updateItem) {
        return JSON.parse(updateItem)
    } else {
        return []
    }
}

// To Store the Data in Local Storage ENDS//

// Provided Component that will be wrapped to the whole project to send the data //
export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [isLoading , setIsLoading] = useState(true)
    const [cart, setCart] = useState(updateJson());
    const [quantity, setQuantity] = useState(1)
    const PRODUCT_API_URL = "https://localhost/wordpress/wp-json/wc/v3/products";

    const fetchProducts = async () => {
        try {
            const response = await axios.get(PRODUCT_API_URL, {
                auth: {
                    username: 'ck_2f9c9314fab7cd06cedae7a2f5c41473aaf86471',
                    password: 'cs_9b05a70ce1ac2012c503b3c622d3d9e801e6f2fa'
                }
            });
            setProducts(response.data);
            setIsLoading(false)
        } catch (error) {
            console.error('Error fetching products: ', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // ProductProvider.jsx
    const addToCart = async (product) => {
        const itemIndex = cart.findIndex((item) => item.id === product.id)

        if (itemIndex !== -1) {
            const updatedCart = [...cart];
            const updatedQuantity = updatedCart[itemIndex].quantity += 1;
            localStorage.setItem('Cart', JSON.stringify(cart))
            setQuantity(updatedCart.length > 0 ? +1 : -1);
            setCart(updatedCart);
        } else {

            const newItem = {...product, quantity};
            const updatedItem = [...cart, newItem]
            localStorage.setItem('Cart', JSON.stringify(updatedItem))
            setCart(updatedItem)
        }
    };
    return (
        <ProductContext.Provider value={{products, addToCart, cart, setCart, quantity, isLoading}}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => useContext(ProductContext);
