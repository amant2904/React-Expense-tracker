import React from 'react'
import "./expenseItem.css"

export default function ExpenseItem() {
    const expenseDate = new Date(23, 10, 2023);
    const expenseItem = "food"
    const expenseCost = 234.67
    const locationOfExpenditure = "KFC"
    return (
        <>
            <div className='main_div'>
                <h1>{expenseDate.toISOString()}</h1>
                <h1>{expenseItem}</h1>
                <h1>{expenseCost}</h1>
                <h1>{locationOfExpenditure}</h1>
            </div>
        </>
    )
}
