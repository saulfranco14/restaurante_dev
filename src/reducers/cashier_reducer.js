import{
    CASHIER_LOADING,
    CASHIER_LOADING_SUCCESS,
    CASHIER_LOADING_ERROR
} from '../types/cashier_types';

const initialState = {
    cashier             : [],
    error               : null,
    loading             : false,
    flag                : false,
}   

export default function waiter( state = initialState, action ){
    switch(action.type){

        case CASHIER_LOADING:
            return{
                ...state,
                loading: true,
                flag: false,
            }

        case CASHIER_LOADING_ERROR:
            return{
                ...state,
                loading: false,
                flag: action.flag,
                error: action.error
            }
        
        case CASHIER_LOADING_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                cashier: action.payload,
                flag: false,
            }

        default:
            return state;
    }
}