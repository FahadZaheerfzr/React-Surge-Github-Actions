import Transcation from './Transaction';
const TransactionHistory = ({transaction}) => {
    console.log(transaction)
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transaction.map(trans => (<Transcation key={trans.id} transaction={trans}/>))}
            </ul>
        </div>
    );
}

export default TransactionHistory