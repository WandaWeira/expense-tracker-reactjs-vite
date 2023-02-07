import './App.css'
import AddNewExpense from './components/AddNewExpense'
import Balance from './components/Balance'
import Header from './components/Header'
import HistoryList from './components/HistoryList'
import IncomeExpense from './components/IncomeExpense'

import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <HistoryList />
        <AddNewExpense />
      </div>
    </GlobalProvider>
  )
}

export default App
