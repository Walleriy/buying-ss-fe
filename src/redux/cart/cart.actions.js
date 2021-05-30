import {
    ADD_TO_CART,
    CART_RESET,
    REMOVE_FROM_CART
} from "./cart.types";

const serverUrl = process.env.REACT_APP_SERVER_URL

export const addProductToCart = (id, amount) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${serverUrl}/api/products/${id}`)
            const product = await response.json()

            dispatch ({
                type: ADD_TO_CART,
                product,
                amount
            })
            localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
        } catch (e) {
            console.log(e)
        }

    }
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const resetCart = ({
    type: CART_RESET
})
