import { Card, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import {useState} from "react";

const SingBook =({book,showThisCom, showCom})=> {

  const [State, setState] = useState({
    clicked: false,
  })
  const comentClick = (e) => {
    console.log(book.asin);
    showThisCom(book.asin);
  };
    return (
      <Col
        xs="12 mb-2"
        md="3"
        lg="2"
        key={book.asin + book.asin}
      >
        <Card
          id="cards"
          className={State.clicked ? "pickedBook h-100" : "h-100"}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body
            className={
              State.clickedlicked
                ? "pickedBook h-100"
                : "h-100 d-flex flex-column justify-content-end p-2"
            }
          >
            <Card.Title className="mb-auto h6">{book.title}</Card.Title>
            <Card.Text>{book.category} </Card.Text>
            <small className="font-weight-bold border-bottom pb-2">
              Asin: {book.asin}
            </small>
            <div className="d-flex flex-column justify-content-between">
              <Button variant="info my-2">Read</Button>
              <Button
                onClick={(e) => comentClick(e)}
                variant="secondary mb-1 mx-3"
                value={book.asin}
              >
                <small>Comments</small>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }


export default SingBook;
