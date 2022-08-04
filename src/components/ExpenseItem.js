import React from 'react'
import './ExpenseItem.css'

function ExpenseItem(props) {

 /* Formatting the date to be displayed in the ExpenseItem component. */
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

  return (
    <div className="expense-item">
        <div className="expense-date">
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
        <div className="expense-item-description">
            <h2>{props.title}</h2>
            <div className="expense-item-amount">${props.amount}</div>
        </div>
        
    </div>
  )
}

export default ExpenseItem