import {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ForecastDetail from './ForecastDetail';

export default function ForecastCard(props){

    const [showDetail, setShowDetail] = useState(false);

    const avgTemp = Math.floor((props.data.tempHigh - props.data.tempLow)/2);
    const windContent = `Wind (${props.data.windDirection}) @ ${Math.floor(props.data.windSpeed)} MPH`;
    const cardContent = (
        <Card style={{width:'18rem'}}>
        <Card.Header></Card.Header>
        <Card.Title>{props.data.day}</Card.Title>
        <Card.Subtitle>{props.data.outlook}</Card.Subtitle>
        <Card.Body>
            <Card.Subtitle>{`Average Temp: ${avgTemp} F`}</Card.Subtitle>
            <Card.Text>{windContent}</Card.Text>
            <br/>
            <Button
                variant="primary" 
                size="sm"
                onClick = {() => setShowDetail(true)}
            >See Details</Button>
        </Card.Body>
    </Card>
    );

    const layout = (
        <div>
            {cardContent}
            <ForecastDetail 
                state={ {showDetail, setShowDetail, forecastData:props.data} } 
            />
        </div>
    );

    return layout;
}