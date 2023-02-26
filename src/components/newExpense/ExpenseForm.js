import React, { useState } from "react";
import Card from "../UI/Card";
import './ExpenseForm.css'

export default function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const title_change = (event) => {
        setEnteredTitle(event.target.value);
    }

    const [enteredAmount, setEnteredAmount] = useState('');
    const amount_change = (event) => {
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState('');
    const date_change = (event) => {
        setEnteredDate(event.target.value);
    }

    const formSubmit_handler = (e) => {
        e.preventDefault();
        let expenseData = {
            id: Math.random(),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.liftUpExpenseDataInApp(expenseData);
    }
    return (
        <Card className="expense-form">
            <form onSubmit={formSubmit_handler}>
                <div className="part_one">
                    <div>
                        <label htmlFor="title">Title</label><br />
                        <input type="text" name="title" id="title" value={enteredTitle} placeholder="Enter Title here" onChange={title_change} />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label><br />
                        <input type="number" name="amount" id="amount" value={enteredAmount} placeholder="Enter Amount Here" onChange={amount_change} />
                    </div>
                </div>
                <div className="part_two">
                    <div>
                        <label htmlFor="date">Date</label><br />
                        <input type="date" name="date" id="date" value={enteredDate} onChange={date_change} min="2019-01-01" max="2023-12-31" />
                    </div>
                    <div className="form_button">
                        <input type="submit" id="addExpense_btn" value="Add Expense" />
                    </div>
                </div>
            </form>
        </Card>
    )
}