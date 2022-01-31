import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const Transcation = ({transactions}) => {
    
    const {transaction, dispatch} = useContext(GlobalContext);
    
    if(transactions.transactionAmount.toString().startsWith("-")){
    return (
        <li className="minus">
            { transactions.description }
            <span>${transactions.transactionAmount}</span>
            <button className="delete-btn" onClick={
                ()=>dispatch({type:"DELETE_TRANSACTION", id:transactions.id})
                }>X</button>
        </li>

    )
    }
    return (
        <li className="plus">
            { transactions.description }
            <span>${transactions.transactionAmount}</span>
            <button className="delete-btn" onClick={
                ()=>dispatch({type:"DELETE_TRANSACTION", id:transactions.id})
                }>X</button>
        </li>

    )

}

export default Transcation