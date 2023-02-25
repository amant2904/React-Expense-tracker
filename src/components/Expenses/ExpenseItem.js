import React, { useState } from 'react'
import "./expenseItem.css"
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card.js'

const ExpenseItem = (props) => {
    // return React.createElement(Card, { className: 'expense-item' },
    //     React.createElement(ExpenseDate, { date: props.date }),
    //     React.createElement('div', { className: 'expense_data' },
    //         React.createElement('h1', {}, props.item),
    //         React.createElement('h1', {}, props.locationOfExpenditure),
    //         React.createElement(ExpenseDetails, { amount: props.amount })
    //     )
    // )

    const [item, setItem] = useState(props.item)
    const [expense, setExpense] = useState(props.amount)
    const dltBtn_handler = () => {
        setItem("Updated!!!!..");
        console.log(item);
    }

    const editExpense = () => {
        setExpense("100");
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense_data'>
                <h1>{item}</h1>
                <h1>{props.locationOfExpenditure}</h1>
                <ExpenseDetails amount={expense} />
            </div>
            <button className='btn dlt_btn' onClick={dltBtn_handler}>Delete</button>
            <button className='btn edit_expense' onClick={editExpense}>Edit Title</button>
        </Card>
    )
}
export default ExpenseItem;