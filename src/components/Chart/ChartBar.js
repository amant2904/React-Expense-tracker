import React from 'react'
import "./ChartBar.css"

export default function ChartBar(props) {
    const calculated_height = Math.round((props.value / props.maxValue) * 100) + "%";
    return (
        <div className='chart-bar'>
            <div className="inner">
                <div className="inner_fill" style={{ height: calculated_height }}></div>
            </div>
            <div className="monthLabel">{props.label}</div>
        </div>
    )
}
