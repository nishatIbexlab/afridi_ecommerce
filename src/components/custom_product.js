import { Card, Button } from "react-bootstrap";
function CustomProduct({ title, description, imageSrc, onClick }) {
  return (
    <div>
      <div>
        <Card style={{ width: "18rem", backgroundColor: "white" }}>
          <Card.Body>
            <Card.Img
              className="img-fluid hover-shadow"
              style={{ margin: "auto" }}
              variant="top"
              src={imageSrc}
            />
            <Card.Title>Card {title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <button variant="primary" onClick={onClick}>
              See details
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CustomProduct;
