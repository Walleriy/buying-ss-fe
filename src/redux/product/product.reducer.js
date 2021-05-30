import {
    GET_PRODUCT_DETAILS_FAIL,
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_RESET,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS
} from "./product.types";

const initialState = {
    products: [],
    loading: false,
    error: false
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                loading: false,
            };
        case GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case GET_PRODUCT_DETAILS_RESET:
            return {
                product: {},
            };
        default:
            return state;
    }
}
