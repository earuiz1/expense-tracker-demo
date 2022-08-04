import React, {useState} from "react";
import './NewExpenseForm.css'

function NewExpenseForm() {

    //Create states for new title, amount and date 
    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    const titleHandler = (event) => {
        //console.log(event.target.value);

        //Set new title
        setNewTitle(event.target.value);
    }

    const amountHandler = (event) => {
        //console.log(event.target.value);

        //Set new amount
        setNewAmount(event.target.value);
    }

    const dateHandler = (event) => {
        //console.log(event.target.value);

        //Set new date
        setNewDate(event.target.value);
    }

    const submitHandler = (event) => {
        
        /* Prevents the default action of the form from happening. */
        event.preventDefault();

        //Create an object that will hold the the form's values
        const formData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }

        console.log(formData);

        //Set Two-way binding to clear the input after the form is submmitted 
        setNewTitle('');
        setNewAmount('');
        setNewDate('');

    }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-controls">
        <div className="form-control">
            <label>Title:</label>
            <input type="text" onChange={titleHandler} value={newTitle}/>

        </div>
        <div className="form-control">
            <label>Amount:</label>
            <input type="number" step="0.01" min="0.01" onChange={amountHandler} value={newAmount}/>

        </div>
        <div className="form-control">
            <label>Date:</label>
            <input type="date" onChange={dateHandler} value={newDate}/>
        </div>
      </div>
      <div className="form-buttons">
            <button type="button">Close</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
  );
}

export default NewExpenseForm;
