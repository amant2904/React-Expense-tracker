import React, { useState } from "react";
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
    // const [formUI, setFormUI] = useState(<button className="addExpense_mainBtn" id="mainBtn" onClick={mainBtn_handler}>Add New Expense</button>)

    function formSubmit_handler(e) {
        e.preventDefault();
        let expenseData = {
            id: Math.random(),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.liftUpExpenseDataInApp(expenseData);
        setHide("0");
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    const [hide, setHide] = useState("0");

    function cancelBtn_handler(e) {
        setHide("0");

    }

    function mainBtn_handler() {
        setHide("1");
    }



    return (
        <div className="expense-form">
            {/* {formUI} */}
            {hide === "0" ?
                <button className="addExpense_mainBtn" id="mainBtn" onClick={mainBtn_handler}>Add New Expense</button> :
                <form hidden={true}>
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
                            <button className="addExpense_btn" onClick={cancelBtn_handler}>Cancel</button>
                            <button className="addExpense_btn" onClick={formSubmit_handler}>Add Expense</button>
                        </div>
                    </div>
                </form>
            }
        </div>
    )
}