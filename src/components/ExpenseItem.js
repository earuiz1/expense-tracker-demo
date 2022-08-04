import React, {useState} from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {

    //Testing how state works
    const [title, setTitle ] = useState(props.title);

    /**
     * The clickHandler function is a function that is called when the button is clicked and sets the new title
     */
    const clickHandler = () => {
         console.log('Updated');
         setTitle('Updated!');
    }
  return (
    <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item-description">
            <h2>{title}</h2>
            <div className="expense-item-amount">${props.amount}</div>
            <button onClick={clickHandler}>Update</button>
        </div>
        
    </div>
  )
}

export default ExpenseItem