import {getProducts} from "../../api/productsApi";

export const FETCH_PRODUCTS_STARTED = 'FETCH_PRODUCTS_STARTED'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

export function fetchProductsStartedAction(){
    return {type: FETCH_PRODUCTS_STARTED}
}

export function fetchProductsSuccessAction(courses){
    return {type: FETCH_PRODUCTS_SUCCESS , payload: courses}
}

export function fetchProductsFailureAction(error){
    return {type: FETCH_PRODUCTS_FAILURE, payload: error}
}

export function fetchProductsThunkAction() {
    return dispatch => {
         dispatch({type: FETCH_PRODUCTS_STARTED})
        fetch("http://localhost:8080/products")
            .then(data => dispatch({type: FETCH_PRODUCTS_SUCCESS , payload: data}))
            .catch(err => {dispatch({type: FETCH_PRODUCTS_FAILURE, payload: err});
        });
    }
};