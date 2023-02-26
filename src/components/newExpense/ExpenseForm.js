import React, { useState } from "react";
import Card from "../UI/Card";
import './ExpenseForm.css'

export default function ExpenseForm() {
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

    const formSubmit_btn = (e) => {
        e.preventDefault();
        let obj = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        }
        console.log(obj);
    }
    return (
        <Card className="expense-form">
            <form action="/">
                <div className="part_one">
                    <div>
                        <label htmlFor="title">Title</label><br />
                        <input type="text" name="title" id="title" placeholder="Enter Title here" onChange={title_change} />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label><br />
                        <input type="number" name="amount" id="amount" placeholder="Enter Amount Here" onChange={amount_change} />
                    </div>
                </div>
                <div className="part_two">
                    <div>
                        <label htmlFor="date">Date</label><br />
                        <input type="date" name="date" id="date" onChange={date_change} min="2019-01-01" max="2023-12-31" />
                    </div>
                    <div className="form_button">
                        <button className="addExpense_btn" onClick={formSubmit_btn}>Add Expense</button>
                    </div>
                </div>
            </form>
        </Card>
    )
}