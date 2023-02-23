import React from 'react'
import "./expenseItem.css"

export default function ExpenseItem(props) {
    return (
        <>
            <div className='main_div'>
                <h1>{props.date.toISOString()}</h1>
                <h1>{props.item}</h1>
                <h1>{props.cost}</h1>
                <h1>{props.locationOfExpenditure}</h1>
                <h1>{props.Key}</h1>
            </div>
        </>
    )
}
