export default (state, action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':{
            let result = {... state}
                action.transaction.transactionAmount.toString().startsWith("-")?
                result.expense=state.expense + Math.abs(parseInt(action.transaction.transactionAmount)):
                result.income=state.income + parseInt(action.transaction.transactionAmount)
                result.transactions= state.transactions.concat(action.transaction);
            return result;
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