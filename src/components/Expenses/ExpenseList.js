import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./ExpenseList.css"

export default function ExpenseList(props) {
    let Expenses = <h3 className='NoExpense-Text'>No Expenses Found...</h3>

    if (props.allExpense().length === 1) {
        Expenses = <div className="all_ExpenseItem">
            <h3 className='NoExpense-Text'>Only One Expense Available. Please Add Some more...</h3>
            {props.allExpense().map((expenses) => {
                return <ExpenseItem key={expenses.id} date={expenses.date} item={expenses.title} amount={expenses.amount} />
            })}
        </div>
    }
    else if (props.allExpense().length > 1) {
        Expenses = <div className="all_ExpenseItem">
            {props.allExpense().map((expenses) => {
                return <ExpenseItem key={expenses.id} date={expenses.date} item={expenses.title} amount={expenses.amount} />
            })}
        </div>
    }

    // if (props.allExpense().length === 0) {
    //     return (
    //         <h3 className='NoExpense-Text'>No Expenses Found...</h3>
    //     )
    // }
    // else if (props.allExpense().length === 1) {
    //     return (
    //         <div className="all_ExpenseItem">
    //             <h3 className='NoExpense-Text'>Only One Expense Available. Please Add Some more...</h3>
    //             {props.allExpense().map((expenses) => {
    //                 return <ExpenseItem key={expenses.id} date={expenses.date} item={expenses.title} amount={expenses.amount} />
    //             })}
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div className="all_ExpenseItem">
    //             {props.allExpense().map((expenses) => {
    //                 return <ExpenseItem key={expenses.id} date={expenses.date} item={expenses.title} amount={expenses.amount} />
    //             })}
    //         </div>
    //     )
    // }

    // ANOTHER WAY OF CONDITIONAL RENDERING :- .........................

    // return (
    //     <div className="all_ExpenseItem">
    //         {props.allExpense().length === 0 && <h3 className='NoExpense-Text'>No Expenses Found...</h3>}
    //         {props.allExpense().length > 0 && props.allExpense().map((expenses) => {
    //             return <ExpenseItem key={expenses.id} date={expenses.date} item={expenses.title} amount={expenses.amount} />
    //         })}
    //     </div>
    // )

    // ANOTHER WAY OF CONDITIONAL RENDERING :- .........................

    return (
        <div className="all_ExpenseItem">
            {Expenses}
        </div>
    )
}
