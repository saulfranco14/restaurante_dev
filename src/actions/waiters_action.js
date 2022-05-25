import clientAxios                  from '../config/axios';
import { SweetAlertBasic }          from '../utils/sweetAlert';
import{
    WAITERS_LOADING,
    // WAITERS_LOADING_SUCCESS,
    // WAITERS_LOADING_ERROR
} from '../types/waiters_types';


/* Waiter */
export function getAllWaiter() {
    return async ( dispatch ) => {
        dispatch( downloadWaiter() );

        try{
            const responseWaiter = await clientAxios.get('/ventas.json');
            console.log(responseWaiter);
            // dispatch( downloadWaiterSuccess (responseUsers.data.data) );

        }catch( error ){
            // dispatch( downloadWaiterError(error) );
            SweetAlertBasic("error","Ups","Hubo un error al cargar la información");   
        }
    }
}

const downloadWaiter = () => ({
    type    : WAITERS_LOADING,
    payload : true
})

// const downloadWaiterSuccess = ( waiters ) => ({
//     type    : WAITERS_LOADING_SUCCESS,
//     payload : waiters
// })

// const downloadWaiterError = (error) => ({
//     type    : WAITERS_LOADING_ERROR,
//     error   : error
// })