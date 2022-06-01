import { Card, Button } from 'react-bootstrap';
function CustomProduct({ props }) {
    return (
        <div>
            <div >
                <Card style={{ width: '18rem', backgroundColor: "white" }}>
                    <Card.Body>
                        <Card.Img className='img-fluid hover-shadow' style={{ margin: "auto", }} variant="top" src="https://picsum.photos/200" />
                        <Card.Title>Card {props}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">See details</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default CustomProduct;
