import { SweetAlertBasic }          from '../utils/sweetAlert';
import{
    ZONE_LOADING,
    ZONE_LOADING_SUCCESS,
    ZONE_LOADING_ERROR
} from '../types/zone_types';
import {
    unique_zone,
    data_zone
} from '../utils/filter_key';

/* Waiter */
export function getAllZone() {
    return async ( dispatch ) => {
        dispatch( downloadZone() );
        try{
            data_zone();
            dispatch( downloadZoneSuccess (unique_zone) );
        }catch( error ){
            dispatch( downloadZoneError(error) );
            SweetAlertBasic("error","Ups","Hubo un error al cargar las zonas");   
        }
    }
}

const downloadZone = () => ({
    type    : ZONE_LOADING,
    payload : true
})

const downloadZoneSuccess = ( zone ) => ({
    type    : ZONE_LOADING_SUCCESS,
    payload : zone
})

const downloadZoneError = (error) => ({
    type    : ZONE_LOADING_ERROR,
    error   : error
})