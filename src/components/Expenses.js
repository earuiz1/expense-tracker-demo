import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  //Create a state to store/handle the filtered year and set default year of 2022
  const [filterYear, setFilterYear] = useState("2022");

  const filterHandler = (filteredYear) => {
    console.log("In Expenses.js", filteredYear);

    //Store data coming from NewExpenseFilter.js
    setFilterYear(filteredYear);
  };

  //Filter the array (check if the year selected is the same as the expense's year)
  const filteredArray = props.expense_array
  .filter((item) => item.date.getFullYear().toString() === filterYear);

  return (
    <div className="expenses-card">
      <ExpenseFilter
        onSaveFilter={filterHandler}
        defaultYear={filterYear}
      ></ExpenseFilter>
      {filteredArray.length === 0 && <h3>No Expenses </h3> }
        {filteredArray.length > 0 && filteredArray.map((item) => (
          <ExpenseItem
            key = {item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        ))}
    </div>
  );
}

export default Expenses;
