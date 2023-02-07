import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddNewExpense = () => {

    const { addTransaction } = useContext(GlobalContext)

    const [ text, setText ] = useState('');
    const [ amount, setAmount ] = useState(0);

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

  return (
    <div className='new-expense-container'>
        <h4>Add new Expense</h4>
        <hr />
        <form onSubmit={onSubmit}>
            <div className='text-input'>
                <label>Expense Category</label>
                <input type="text" 
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    placeholder='Enter expense category...'
                />
            </div>
            <div className='text-input'>
                <label>Amount</label>
                <p><em>Amount(negative-expense , positive-income)</em></p>
                <input type="number" 
                    value={amount}
                    onChange={(e) => {
                        setAmount(e.target.value)
                    }}
                    placeholder='Enter Amount...'
                />
            </div>
            <button className='expense-button'>Add Expense</button>
        </form>
        
    </div>
  )
}

export default AddNewExpense