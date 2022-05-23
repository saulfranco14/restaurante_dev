const initial_state = {
    waiters         : [],
    loading_waiter  : false,
    error_waiter    : null,
}

export default function( state = initial_state, action ){
    switch(action.type){
        default:
            return state;
    }
}