
import Card from 'react-bootstrap/Card';


export default function ForecastCard(props){

    const exampleCard = (
        <Card style={{width:'18rem'}}>
            <Card.Header></Card.Header>
            <Card.Title>{forecastData[0].day}</Card.Title>
            <Card.Subtitle>{forecastData[0].outlook}</Card.Subtitle>
            <Card.Body></Card.Body>
    
        </Card>
    )

    return exampleCard;
}
