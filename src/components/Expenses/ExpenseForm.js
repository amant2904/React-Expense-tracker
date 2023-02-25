import React from "react";
import Card from "../UI/Card";
import './ExpenseForm.css'

export default function ExpenseForm() {
    const input_change = (event) => {
        console.log(event.target.value);
    }

    return (
        <Card className="expense-form">
            <form action="/">
                <div className="part_one">
                    <div>
                        <label htmlFor="title">Title</label><br />
                        <input type="text" name="title" id="title" placeholder="Enter Title here" onChange={input_change} />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label><br />
                        <input type="number" name="amount" id="amount" placeholder="Enter Amount Here" onChange={input_change} />
                    </div>
                </div>
                <div className="part_two">
                    <div>
                        <label htmlFor="date">Date</label><br />
                        <input type="date" name="date" id="date" onChange={input_change} />
                    </div>
                    <div className="form_button">
                        <button className="addExpense_btn">Add Expense</button>
                    </div>
                </div>
            </form>
        </Card>
    )
}