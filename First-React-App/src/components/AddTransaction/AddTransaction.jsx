import { useContext, useState } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";

const AddTransaction = () => {
    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState("");
    const {transaction, dispatch} = useContext(GlobalContext);
    const [id, setID] = useState(transaction.length+1);

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" id="description"
                        placeholder="Detail of Transaction" value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number" id="transactionamount"
                        placeholder="Enter Transaction Amount" value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)} />
                </div>
                <button type="button" className="btn" onClick={
                    ()=>{
                        dispatch({type:'ADD_TRANSACTION',transaction:{id:id, description:description, transactionAmount:transactionAmount}});
                        setID(id+1);
                        }}>
                    Add Transaction
                </button>
            </form>
        </div>
    )
}

export default AddTransaction