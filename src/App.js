import React from 'react'
// import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { v4 as uuid } from 'uuid';

function App() {

/* Creating an array of objects. */
  const dummy_expenses = [
    {
      id: uuid(),
      title: "Electricity",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: uuid(), 
      title: "New Car", 
      amount: 8799.49, 
      date: new Date(2022, 2, 12) 
    },
    {
      id: uuid(),
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 5, 29),
    },
    {
      id: uuid(),
      title: "New Tv",
      amount: 450,
      date: new Date(2021, 8, 19),
    },
  ];

  return (
    <div>
      <h2>Expense Tracker Tutorial (React) </h2>
      {/* This component will render a form that will allow the user to enter a new expense */}
      <NewExpense></NewExpense>
      {/* To make this file more readable, create a new file and use ExpenseItem.js there. */}
      <Expenses expense_array = {dummy_expenses}></Expenses>
    </div>
  );
}

export default App;
