import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
  return (
    <div className="expenses-card">
      <ExpenseItem title={props.expense_array[0].title} amount={props.expense_array[0].amount} date={props.expense_array[0].date}></ExpenseItem>
      <ExpenseItem title={props.expense_array[1].title} amount={props.expense_array[1].amount} date={props.expense_array[1].date}></ExpenseItem>
      <ExpenseItem title={props.expense_array[2].title} amount={props.expense_array[2].amount} date={props.expense_array[2].date}></ExpenseItem>
      <ExpenseItem title={props.expense_array[3].title} amount={props.expense_array[3].amount} date={props.expense_array[3].date}></ExpenseItem>
    </div>
  );
}

export default Expenses;
