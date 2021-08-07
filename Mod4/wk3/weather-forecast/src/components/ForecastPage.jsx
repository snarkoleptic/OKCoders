import { SCREENS} from "../constants";
import {getForecastData} from "../simulateDatabase"

import {ForecastCard} from "./ForecastCard"

export default function ForecastPage(props) {
    const forecastData = getForecastData(props.forecastDays)



    const returnWelcome = (
        <div onClick={() => {props.setActiveScreen(SCREENS.WelcomePage)}}>
            <p>Return to Welcome Page</p>
        </div>
    )

    const layout = (
        <div>
            {returnWelcome}
            <ForecastCard data={forecastData[0]} />
        </div>
    );

    return layout;
}