import { SCREENS } from '../constants';

export default function WelcomePage(props) {
    const selections = [
        {label: "3 Days", value: 3},
        {label: "5 Days", value: 5},
        {label: "7 Days", value: 7}
    ];
    const forecastButtons = selections.map((item) => (
        <button 
            id={item.value}
            onClick={() => {
                props.setForecastDays(item.value)
                props.setActiveScreen(SCREENS.ForecastPage)
            }}
        >
            {item.label}
        </button>
    ));


    const layout = (
        <div style={{backgroundColor:'silver'}}>
            {forecastButtons}
        </div>
    );

    return layout;
}