import { SweetAlertBasic }          from '../utils/sweetAlert';
import{
    PRODUCT_LOADING,
    PRODUCT_LOADING_SUCCESS,
    PRODUCT_LOADING_ERROR
} from '../types/product_types';
import {
    unique_product,
    data_product
} from '../utils/filter_key';

/* Waiter */
export function getAllProduct() {
    return async ( dispatch ) => {
        dispatch( downloadProduct() );
        try{
            data_product();
            dispatch( downloadProductSuccess (unique_product) );
        }catch( error ){
            dispatch( downloadProductError(error) );
            SweetAlertBasic("error","Ups","Hubo un error al cargar los productos");   
        }
    }
}

const downloadProduct = () => ({
    type    : PRODUCT_LOADING,
    payload : true
})

const downloadProductSuccess = ( product ) => ({
    type    : PRODUCT_LOADING_SUCCESS,
    payload : product
})

const downloadProductError = (error) => ({
    type    : PRODUCT_LOADING_ERROR,
    error   : error
})