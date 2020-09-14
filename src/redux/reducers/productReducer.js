import {FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_STARTED, FETCH_PRODUCTS_SUCCESS} from "../actions/productActions";

const initialState = {
    loading: false,
    data: [],
    error: null
};


export default function fetchProducts(state= initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_STARTED:
            return {...state, loading: true};
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, data: action.payload.products, loading: false};
        case FETCH_PRODUCTS_FAILURE:
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
}