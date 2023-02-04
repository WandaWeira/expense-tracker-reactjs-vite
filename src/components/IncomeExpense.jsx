import React from 'react'

const IncomeExpense = () => {
  return (
    <div className='income-expense-container'>
        <div className='income'>
            <h4>Income</h4>
            <p><span>+ $</span>123</p>
        </div>
        <div className='expense'>
            <h4>Expense</h4>
            <p><span>- $</span>123</p>
        </div>
    </div>
  )
}

export default IncomeExpense