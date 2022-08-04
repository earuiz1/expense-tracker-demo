import React from 'react'
import ExpenseItem from './components/ExpenseItem'
function App() {

/* Creating an array of objects. */
  const dummy_expenses = [
    {
      id: "e1",
      title: "Electricity",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", 
      title: "New Car", 
      amount: 8799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 5, 29),
    },
    {
      id: "e4",
      title: "New Tv",
      amount: 450,
      date: new Date(2019, 8, 19),
    },
  ];

  return (
    <div>
      <h2>Expense Tracker Tutorial (React) </h2>
      <ExpenseItem title={dummy_expenses[0].title} amount={dummy_expenses[0].amount} date={dummy_expenses[0].date}></ExpenseItem>
      <ExpenseItem title={dummy_expenses[1].title} amount={dummy_expenses[1].amount} date={dummy_expenses[1].date}></ExpenseItem>
      <ExpenseItem title={dummy_expenses[2].title} amount={dummy_expenses[2].amount} date={dummy_expenses[2].date}></ExpenseItem>
      <ExpenseItem title={dummy_expenses[3].title} amount={dummy_expenses[3].amount} date={dummy_expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
