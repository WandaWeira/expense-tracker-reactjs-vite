import React from 'react'

const AddNewExpense = () => {
  return (
    <div className='new-expense-container'>
        <h4>Add new Expense</h4>
        <hr />
        <div className='text-input'>
            <label>Expense Category</label>
            <input type="text" 
                placeholder='Enter expense category...'
            />
        </div>
        <div className='text-input'>
            <label>Amount</label>
            <p><em>Amount(negative-expense , positive-income)</em></p>
            <input type="number" 
                placeholder='Enter Amount...'
            />
        </div>
        <button className='expense-button'>Add Expense</button>
    </div>
  )
}

export default AddNewExpense