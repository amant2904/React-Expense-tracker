import React from 'react'
import "./expenseItem.css"
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

export default function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <p>{props.item}</p>
            <p>{props.locationOfExpenditure}</p>
            <ExpenseDetails amount={props.amount} />
        </div>
    )
}
