import{
    PRODUCT_LOADING,
    PRODUCT_LOADING_SUCCESS,
    PRODUCT_LOADING_ERROR
} from '../types/product_types';

const initialState = {
    product             : [],
    error               : null,
    loading             : false,
    flag                : false,
}   

export default function product( state = initialState, action ){
    switch(action.type){

        case PRODUCT_LOADING:
            return{
                ...state,
                loading: true,
                flag: false,
            }

        case PRODUCT_LOADING_ERROR:
            return{
                ...state,
                loading: false,
                flag: action.flag,
                error: action.error
            }
        
        case PRODUCT_LOADING_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                product: action.payload,
                flag: false,
            }

        default:
            return state;
    }
}