export default (state, action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            return {
                ... state,
                transactions: state.transactions.concat(action.transaction)
            };
        case 'DELETE_TRANSACTION':
            return {
                ... state,
                transactions: state.transactions.filter(trans => trans.id != action.id)
            };
        default:
            return state;
    }
}