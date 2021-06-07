import {
    GET_PRODUCT_DETAILS_FAIL,
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_RESET,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS
} from "./product.types";

const serverUrl = process.env.REACT_APP_SERVER_URL || 'https://buying-ss-be.herokuapp.com'

export const getAllProducts = (params) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_REQUEST });
        const response = await fetch(`${serverUrl}/api/products?${params}`)
        const products = await response.json()

        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: products,
        });
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });

        const response = await fetch(`${serverUrl}/api/products/${id}`)
        const product = await response.json()

        dispatch({
            type: GET_PRODUCT_DETAILS_SUCCESS,
            payload: product,
        });
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({ type: GET_PRODUCT_DETAILS_RESET });
};
