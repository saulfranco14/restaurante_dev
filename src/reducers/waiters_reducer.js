import{
    WAITERS_LOADING,
    WAITERS_LOADING_SUCCESS,
    WAITERS_LOADING_ERROR
} from '../types/waiters_types';

const initialState = {
    waiters             : [],
    error               : null,
    loading             : false,
    flag                : false,
}   

export default function waiter( state = initialState, action ){
    switch(action.type){

        case WAITERS_LOADING:
            return{
                ...state,
                loading: true,
                flag: false,
            }

        case WAITERS_LOADING_ERROR:
            return{
                ...state,
                loading: false,
                flag: action.flag,
                error: action.error
            }
        
        case WAITERS_LOADING_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                waiters: action.payload,
                flag: false,
            }

        default:
            return state;
    }
}