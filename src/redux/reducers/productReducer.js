import {FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_STARTED, FETCH_PRODUCTS_SUCCESS} from "../actions/productActions";

const initialState = {
    loading: false,
    products: [],
    error: null
};


export default function fetchProducts(state= initialState, action) {
    console.log('ProductForm Reducer working');
    switch (action.type) {
        case FETCH_PRODUCTS_STARTED:
            return {...state, loading: true};
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, products: action.payload};
        case FETCH_PRODUCTS_FAILURE:
            return {...state, error: action.payload};
        default:
            return state;
    }
}