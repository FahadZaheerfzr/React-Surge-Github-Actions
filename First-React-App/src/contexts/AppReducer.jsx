export default (state, action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            if(action.transaction.transactionAmount.toString().startsWith("-")){
                return {
                    ... state,
                    transactions: state.transactions.concat(action.transaction),
                    expense: state.expense + Math.abs(parseInt(action.transaction.transactionAmount))
                };
            }
            else{
                return {
                    ... state,
                    transactions: state.transactions.concat(action.transaction),
                    income: state.income + parseInt(action.transaction.transactionAmount)
                };
            }
        case 'DELETE_TRANSACTION':
            var result = state.transactions.find(obj => {
                return obj.id === action.id;
            })
            if(result.transactionAmount.toString().startsWith("-")){
                return {
                    ... state,
                    transactions: state.transactions.filter(trans => trans.id != action.id),
                    expense: state.expense + parseInt(result.transactionAmount)
                };
            }
            else{
                return {
                    ... state,
                    transactions: state.transactions.filter(trans => trans.id != action.id),
                    income: state.income - parseInt(result.transactionAmount)
                };
            }
        default:
            return state;
    }
}