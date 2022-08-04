import React from 'react'
import NewExpenseForm from './NewExpenseForm'
import { v4 as uuid } from 'uuid';
import './NewExpense.css'

function NewExpense() {
    
const formDataHandler = (submittedFormData) => {
    
    //Create a new object to store data coming from NewExpenseForm.js and add new id field
    const formData = {
        ...submittedFormData,
        id: uuid(),
    }

    console.log('In NewExpense.js', formData);
}
  return (
    <div className="new-expense">
        <NewExpenseForm onFormDataSave = {formDataHandler}></NewExpenseForm>
    </div>
  )
}

export default NewExpense