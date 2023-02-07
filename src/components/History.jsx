import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const History = ({transaction}) => {

  const { deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' :'+';
  return (
    <div className={transaction.amount < 0 ? 'history-card-expense' : 'history-card-income'}>
        <h4>{transaction.text}</h4>
        <h4><span>{sign}$</span>{Math.abs(transaction.amount)}</h4>
        <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
    </div>
  )
}

export default History