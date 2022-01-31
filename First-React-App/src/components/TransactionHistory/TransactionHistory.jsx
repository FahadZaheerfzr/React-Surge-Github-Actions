import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Transcation from './Transaction';

const TransactionHistory = () => {
    const { transaction } = useContext(GlobalContext);
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transaction.map(trans => (<Transcation key={trans.id} transactions={trans}/>))}
            </ul>
        </div>
    );
}

export default TransactionHistory