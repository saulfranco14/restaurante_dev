import { combineReducers }      from 'redux';
import waiters_reducers         from './waiters_reducer';
import cashier_reducers         from './cashier_reducer';
import product_reducers         from './product_reducer';
import zone_reducers            from './zone_reducer';
import report_reducers          from './report_reducer';


export default combineReducers({
    waiters         : waiters_reducers,
    cashier         : cashier_reducers,
    product         : product_reducers,
    zone            : zone_reducers,
    report          : report_reducers,
})