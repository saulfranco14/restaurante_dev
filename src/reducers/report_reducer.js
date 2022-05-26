import{
    REPORT_INIT,
    REPORT_SUCCESS,
    REPORT_ERROR,
    RANGE_INIT,
    RANGE_SUCCESS,
    RANGE_ERROR
} from '../types/report_types';

const initialState = {
    report              : [],
    error               : null,
    loading             : false,
    flag                : false,
    category            : null,
    range               : {}
}   

export default function waiter( state = initialState, action ){
    switch(action.type){

        case REPORT_INIT:
        case RANGE_INIT:
            return{
                ...state,
                loading: true,
                flag: false,
            }

        case REPORT_ERROR:
        case RANGE_ERROR:
            return{
                ...state,
                loading: false,
                flag: action.flag,
                error: action.error
            }
        
        case REPORT_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                category: action.payload,
                flag: false,
            }

        case RANGE_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                range: action.payload,
                flag: false,
            }

        default:
            return state;
    }
}