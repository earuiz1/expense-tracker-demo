import React, {useState} from 'react'
// import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import './App.css'
import { v4 as uuid } from 'uuid';

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

function App() {

  const [expenses, setExpense] = useState(dummy_expenses);

  const saveDataHandler = (submmitedData) => {
    console.log('In App.js', submmitedData);

    setExpense(prevExpense => {
      return [submmitedData, ...prevExpense];
    })
  }

  return (
    <div>
      <h1>Expense Tracker Tutorial (React) </h1>
      {/* This component will render a form that will allow the user to enter a new expense */}
      <NewExpense onSaveData = {saveDataHandler}></NewExpense>
      {/* To make this file more readable, create a new file and use ExpenseItem.js there. */}
      <Expenses expense_array = {expenses}></Expenses>
    </div>
  );
}

export default App;
