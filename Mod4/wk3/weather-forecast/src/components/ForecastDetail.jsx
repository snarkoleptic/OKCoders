import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ForecastDetail(props) {

    const data = props.state.forecastData;

    const tempRange = `High:  ${Math.floor(data.tempHigh)}  |  Low:  ${Math.floor(data.tempLow)}`;
    const windContent = `Wind (${data.windDirection}) @ ${Math.floor(data.windSpeed)} MPH`;

    const bodyContent = (
        <>
            <h5>{tempRange}</h5>
            <p>{windContent}</p>
            <br/>
            <p>Moon Phase: Full</p>
            <p>Air Quality:13</p>
            <p>Sunrise: 6:04 AM  |  Sunset: 9:29 PM</p>
        </>

    );

    const closeButton = (
        <Button variant="info" size="sm"
            onClick = {() => props.state.setShowDetail(false)}
        >Close Details</Button>
    );

    const layout = (
        <Modal show={props.state.showDetail} onHide={() => props.state.setShowDetail(false)}>
            <Modal.Header>
                <Modal.Title>{data.day}</Modal.Title>
                <h4>{data.outlook}</h4>
            </Modal.Header>
            <Modal.Body>
                {bodyContent}
            </Modal.Body>
            <Modal.Footer>
                {closeButton}
            </Modal.Footer>
        </Modal>
    );

    return layout;

}