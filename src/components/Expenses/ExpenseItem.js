import React from 'react'
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
export default ExpenseItem;