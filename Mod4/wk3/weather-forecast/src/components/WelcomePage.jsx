import {useState} from 'react'

export default function WelcomePage(props) {
    console.log(props)
    // const forecastDays = props
    const selections = [
        {label: "3 Days", value: 3},
        {label: "5 Days", value: 5},
        {label: "7 Days", value: 7}
    ]
    const forecastButtons = selections.map((item) => (
        <button 
            id={item.value}
            onClick={() => props.setForecastDays(item.value)}
        >
            {item.label}
        </button>
    ))


    const layout = (
        <div style={{backgroundColor:'silver'}}>
            <h2>Official OKCoders Weather Forecast App</h2>
            {forecastButtons}
            {/* <p>{forecastDays}</p> */}
        </div>
    )
    return layout
}