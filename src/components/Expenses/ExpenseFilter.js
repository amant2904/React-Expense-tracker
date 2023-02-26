import React from 'react'
import "./ExpenseFilter.css"

export default function ExpenseFilter(props) {
    const filter_handler = (event) => {
        props.liftUpValueInApp(event.target.value);
    }
    return (
        <div className='expense-filter'>
            <label htmlFor="filter">Filter By Year</label>
            <select value={props.selected} onChange={filter_handler}>
                <option value="all">All Expenses</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    )
}
