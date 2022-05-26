import{
    ZONE_LOADING,
    ZONE_LOADING_SUCCESS,
    ZONE_LOADING_ERROR
} from '../types/zone_types';

const initialState = {
    zone             : [],
    error               : null,
    loading             : false,
    flag                : false,
}   

export default function waiter( state = initialState, action ){
    switch(action.type){

        case ZONE_LOADING:
            return{
                ...state,
                loading: true,
                flag: false,
            }

        case ZONE_LOADING_ERROR:
            return{
                ...state,
                loading: false,
                flag: action.flag,
                error: action.error
            }
        
        case ZONE_LOADING_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                zone: action.payload,
                flag: false,
            }

        default:
            return state;
    }
}