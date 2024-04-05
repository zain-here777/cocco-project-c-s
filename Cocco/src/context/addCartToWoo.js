import {apiKey} from "./apiKey.js";


export const addCartToWoo = async (cart) => {

    try {
        const orderData = {
            line_items: Array.isArray(cart) && cart.map(product => ({
                product_id: product.id,
                quantity: product.quantity,
                price : product.price,
                name : product.name
            }))
        }
        const Data = await fetch(`https://localhost/wordpress/wp-json/wc/v3/orders`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${apiKey()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        console.log(Data)
        if (Data.ok) {
            const updateJson = await Data.json()
            console.log(updateJson)
            return updateJson
        } else {
            const responseData = await Data.json();
            console.log('Order added successfully:', responseData);
            return responseData;
        }
    } catch (error) {
        console.error('Data is not valid', error.message)
        throw error
    }
}