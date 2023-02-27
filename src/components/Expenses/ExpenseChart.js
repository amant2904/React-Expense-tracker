import React from 'react'
import Chart from '../Chart/Chart'
import './ExpenseChart.css'

export default function ExpenseChart(props) {
    const expenseData = [
        { label: "jan", value: 0 },
        { label: "feb", value: 0 },
        { label: "mar", value: 0 },
        { label: "apr", value: 0 },
        { label: "may", value: 0 },
        { label: "jun", value: 0 },
        { label: "jul", value: 0 },
        { label: "aug", value: 0 },
        { label: "sep", value: 0 },
        { label: "oct", value: 0 },
        { label: "nov", value: 0 },
        { label: "dec", value: 0 }
    ]
    for (let i of props.expenseItems()) {
        let focusMonth = i.date.getMonth();
        expenseData[focusMonth].value += parseInt(i.amount);
    }
    return (
        <div className='expense-chart'>
            <Chart dataItems={expenseData} />
        </div>
    )
}
