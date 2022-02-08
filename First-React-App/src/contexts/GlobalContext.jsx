import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: [
       
    ],
    expense:0,
    income:0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider value={{transaction: state.transactions, dispatch, expense: state.expense, income:state.income }}>
            {children}
        </GlobalContext.Provider>
    )
}