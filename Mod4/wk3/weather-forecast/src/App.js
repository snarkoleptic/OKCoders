//import './App.css';
import {useState} from 'react';

import WelcomePage from './components/WelcomePage'
import ForecastPage from './components/ForecastPage'



export default function App() {
  // pick which page to show
  //Least/Closest Common Parent, store the state here instead of in WelcomePage
  const [forecastDays, setForecastDays] = useState(0)

  return (
    <div className="App">
      <WelcomePage setForecastDays={setForecastDays}/>
      <ForecastPage forecastDays={forecastDays}/>
    </div>
  );
}
