
import { Row, Col } from "react-bootstrap";
import LatestRel from "./LatestRel";
import CommentsArea from "./CommentArea";
import { useState } from "react";
// LIBRARY
const Library = () => {
  const [State, setState] = useState({
    showCom: false,
    comAsin: null
  });

  const showThisCom = (asin) => {
    setState({ ...State, showCom: true });
    State.comAsin !== asin
      ? setState({ ...State, comAsin: asin })
      : setState({ ...State, showCom: !State.showCom, comAsin: asin });
  };
  return (
    <>
      <Row className="px-4">
        <Col xs="9">
          <LatestRel
            showThisCom={(asin) => showThisCom(asin)}
            showCom={State.showCom}
          />
        </Col>
        <Col xs="3 d-flex flex-column text-center">
          <div className="text-center">
            <h2 className="font-weight-light mx-auto">Commentaries</h2>
            <hr />
          </div>
          {State.showCom ? (
            <CommentsArea asin={State.comAsin} />
          ) : (
            <h5 className="font-weight-light mx-auto">Book're not picked</h5>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Library;
