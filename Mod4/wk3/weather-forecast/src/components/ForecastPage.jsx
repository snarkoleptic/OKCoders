import {SCREENS} from '../constants';
import {getForecastData} from '../simulateDatabase';

import CardGroup from 'react-bootstrap/CardGroup'

import ForecastCard from './ForecastCard';

export default function ForecastPage(props) {
    const returnWelcome = (
        <div 
            variant = "link"
            onClick={() => {props.setActiveScreen(SCREENS.WelcomePage)}}>
            <p>Return to Welcome Page</p>
        </div>
    );
    const forecastData = getForecastData(props.forecastDays);
    const dayCards = forecastData.map((item) => (<ForecastCard data={item}/>));

    const layout = (
        <div>
            {returnWelcome}
            <CardGroup>{dayCards}</CardGroup>
        </div>
    );

    return layout;
}