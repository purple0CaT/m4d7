import SciFi from "../data/scifi.json";
import Fantasy from "../data/fantasy.json";
import History from "../data/history.json";
import Romance from "../data/romance.json";
import Horror from "../data/horror.json";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LatestRel from "./LatestRel";
import CommentsArea from "./CommentArea";

class Library extends Component {
  state = {
    showCom: false,
    comAsin: null,
  };

  showThisCom = (asin) => {
    this.setState({ showCom: true });

    this.state.comAsin !== asin
      ? this.setState({ comAsin: asin })
      : this.setState({ showCom: !this.state.showCom, comAsin: asin });
  };

  render() {
    return (
      <>
        <Row className="px-4">
          <Col xs="9">
            <LatestRel
              showThisCom={this.showThisCom}
              showCom={this.state.showCom}
            />
          </Col>
          <Col xs="3 d-flex flex-column text-center">
            <div className="text-center">
              <h2 className="font-weight-light mx-auto">Commentaries</h2>
              <hr />
              </div>
              {this.state.showCom ? (
                <CommentsArea asin={this.state.comAsin} />
              ) : (
                <h5 className="font-weight-light mx-auto">Book're not picked</h5>
              )}
          </Col>
        </Row>
      </>
    );
  }
}
export default Library;
