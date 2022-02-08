import { useContext, useState } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';

const Balance = () => {
    const {expense,income} = useContext(GlobalContext);
    return(
        <div>
            <h4>Current Balance</h4>
            <h1>${income-expense}</h1>
        </div>
    )
}

export default Balance;