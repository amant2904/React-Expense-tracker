import React from 'react'
import ChartBar from './ChartBar'
import "./Chart.css"

export default function Chart(props) {
    const allItemsValues = props.dataItems.map((expenseData) => {
        return expenseData.value;
    })
    let maxAmount = Math.max(...allItemsValues);

    return (
        <div className='chart'>
            {props.dataItems.map((items) => {
                return <ChartBar key={Math.random()} value={items.value} maxValue={maxAmount} label={items.label} />
            })}
        </div>
    )
}
