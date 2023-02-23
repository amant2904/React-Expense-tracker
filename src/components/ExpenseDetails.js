import React from 'react'
import './ExpenseDetails.css'

export default function ExpenseDetails(props) {
    return (
        <h1 className='expense_amount'>${props.amount}</h1>
    )
}
