import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  //Create a state to store and handle the filter year
  //const [filterYear, setFilterYear] = useState("2019");

  const filterHandler = (event) => {

    console.log("filter updated!", event.target.value);

    // setFilterYear(event.target.value);
    props.onSaveFilter(event.target.value);
   
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterHandler} value={props.defaultYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
