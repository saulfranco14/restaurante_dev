import { SweetAlertBasic }          from '../utils/sweetAlert';
import{
    CASHIER_LOADING,
    CASHIER_LOADING_SUCCESS,
    CASHIER_LOADING_ERROR
} from '../types/cashier_types';
import {
    unique_cashier,
    data_cashier
} from '../utils/filter_key';

/* Waiter */
export function getAllCashier() {
    return async ( dispatch ) => {
        dispatch( downloadCashier() );
        try{
            data_cashier();
            dispatch( downloadCashierSuccess (unique_cashier) );
        }catch( error ){
            dispatch( downloadCashierError(error) );
            SweetAlertBasic("error","Ups","Hubo un error al cargar los cajeros");   
        }
    }
}

const downloadCashier = () => ({
    type    : CASHIER_LOADING,
    payload : true
})

const downloadCashierSuccess = ( cashier ) => ({
    type    : CASHIER_LOADING_SUCCESS,
    payload : cashier
})

const downloadCashierError = (error) => ({
    type    : CASHIER_LOADING_ERROR,
    error   : error
})