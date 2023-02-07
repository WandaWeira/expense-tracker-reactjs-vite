import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import History from './History'

const HistoryList = () => {

  const {transactions} = useContext(GlobalContext)

  return (
    <div className='history-container'>
        <h4>History</h4>
        <hr />
        {
          transactions.map((transaction) => (
            <History key={transaction.id} transaction={transaction}/>
          ))}
    </div>
  )
}

export default HistoryList