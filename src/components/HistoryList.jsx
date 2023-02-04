import React from 'react'

const HistoryList = () => {
  return (
    <div className='history-container'>
        <h4>History</h4>
        <hr />
        <div className='history-card-expense'>
          <h4>Cash</h4>
          <h4><span>- $</span>123</h4>
        </div>
        <div className='history-card-income'>
          <h4>Cash</h4>
          <h4><span>+ $</span>123</h4>
        </div>
    </div>
  )
}

export default HistoryList