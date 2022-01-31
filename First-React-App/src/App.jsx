import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Balance from './components/Balance/Balance'
import AccountSummary from './components/AccountSummary/AccountSummary'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import AddTransaction from './components/AddTransaction/AddTransaction'
import { GlobalProvider } from './contexts/GlobalContext'
function App() {
  const [balance, setBalance] = useState(0.00)
  
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>

    </GlobalProvider>
  );
}

export default App
