import './App.css';
import {useState} from 'react';
import {SCREENS} from './constants';

import WelcomePage from './components/WelcomePage';
import ForecastPage from './components/ForecastPage';

export default function App() {
  // pick which page to show
  //Least/Closest Common Parent, store the state here instead of in WelcomePage

  const [activeScreen, setActiveScreen] = useState(SCREENS.WelcomePage);
  const [forecastDays, setForecastDays] = useState(3);
  const screenBank = {
    [SCREENS.WelcomePage]:(<WelcomePage 
      setActiveScreen={setActiveScreen}
      setForecastDays={setForecastDays}
    />),
    [SCREENS.ForecastPage]:(<ForecastPage 
      setActiveScreen={setActiveScreen}
      forecastDays={forecastDays}
    />)
  }

  return (
    <div className="App">
      <h2>Official OKCoders Weather Forecast App</h2>
      {screenBank[activeScreen]}
    </div>
  );
}
