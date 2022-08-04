import React from "react";
import './ExpenseDate.css'

function ExpenseDate(props) {

     /* Formatting the date to be displayed in the ExpenseItem component. */
     const month = props.date.toLocaleString('en-US', {month: 'long'});
     const day = props.date.toLocaleString('en-US', {day: '2-digit'});
     const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
