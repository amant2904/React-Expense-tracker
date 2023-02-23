import React from 'react'
import "./ExpenseDate.css"
import Card from '../UI/Card';

export default function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const date = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();

    return (
        <Card className='expense-date'>
            <div className="expense__month">{month}</div>
            <div className="expense__year">{year}</div>
            <div className="expense__date">{date}</div>
        </Card>
    )
}
