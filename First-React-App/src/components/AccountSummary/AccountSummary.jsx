import { useContext } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';

const AccountSummary = () => {
    const {expense,income} = useContext(GlobalContext);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    ${income}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    ${expense}
                </p>
            </div>
        </div>
    );
}

export default AccountSummary