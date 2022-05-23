import { combineReducers }      from 'redux';
import waiters_reducers         from './waiters_reducer'


export default combineReducers({
    waiters        : waiters_reducers,
})