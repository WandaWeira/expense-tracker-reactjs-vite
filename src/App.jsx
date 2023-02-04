import { useState } from 'react'
import './App.css'
import AddNewExpense from './components/AddNewExpense'
import Balance from './components/Balance'
import Header from './components/Header'
import HistoryList from './components/HistoryList'
import IncomeExpense from './components/IncomeExpense'

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <HistoryList />
        <AddNewExpense />
      </div>
    </>
  )
}

export default App
