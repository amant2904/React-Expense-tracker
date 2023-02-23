import React from 'react'
import "./expenseItem.css"
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from './Card.js'

export default function ExpenseItem(props) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense_data'>
                <h1>{props.item}</h1>
                <h1>{props.locationOfExpenditure}</h1>
                <ExpenseDetails amount={props.amount} />
            </div>
        </Card>
    )
}
