import { SweetAlertBasic }          from '../utils/sweetAlert';
import{
    REPORT_INIT,
    REPORT_SUCCESS,
    REPORT_ERROR,
    RANGE_SUCCESS
} from '../types/report_types';

export function addDataReport(data) {
    return async ( dispatch ) => {
        dispatch( initAddDataReport() );
        try{
            data.date_select ? dispatch( addRangeReportSuccess (data) ) : dispatch( addDataReportSuccess (data) );
        }catch( error ){
            dispatch( errorDataReport(error) );
            SweetAlertBasic("error","Ups","Hubo un error al agregar datos para obtener reporte.");   
        }
    }
}

const initAddDataReport = () => ({
    type    : REPORT_INIT,
    payload : true
})

const addDataReportSuccess = ( data ) => ({
    type    : REPORT_SUCCESS,
    payload : data
})

const addRangeReportSuccess = ( data ) => ({
    type    : RANGE_SUCCESS,
    payload : data
})

const errorDataReport = (error) => ({
    type    : REPORT_ERROR,
    error   : error
})