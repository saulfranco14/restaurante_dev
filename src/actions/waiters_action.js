import { SweetAlertBasic }          from '../utils/sweetAlert';
import{
    WAITERS_LOADING,
    WAITERS_LOADING_SUCCESS,
    WAITERS_LOADING_ERROR
} from '../types/waiters_types';
import {
    unique_key,
    data_key
} from '../utils/filter_key';

/* Waiter */
export function getAllWaiter() {
    return async ( dispatch ) => {
        dispatch( downloadWaiter() );
        try{
            data_key('waiter');
            dispatch( downloadWaiterSuccess (unique_key) );
        }catch( error ){
            dispatch( downloadWaiterError(error) );
            SweetAlertBasic("error","Ups","Hubo un error al cargar los meseros");   
        }
    }
}

const downloadWaiter = () => ({
    type    : WAITERS_LOADING,
    payload : true
})

const downloadWaiterSuccess = ( waiters ) => ({
    type    : WAITERS_LOADING_SUCCESS,
    payload : waiters
})

const downloadWaiterError = (error) => ({
    type    : WAITERS_LOADING_ERROR,
    error   : error
})