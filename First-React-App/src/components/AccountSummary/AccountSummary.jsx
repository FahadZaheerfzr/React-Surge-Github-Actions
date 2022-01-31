import { useContext, useState } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';

const AccountSummary = () => {
    const {transaction, dispatch} = useContext(GlobalContext);
    const [income, setIncome] = useState(0.00);
    const [expense, setExpense] = useState(0.00);
    
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    $0.00
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    $0.00
                </p>
            </div>
        </div>
    );
}

export default AccountSummary