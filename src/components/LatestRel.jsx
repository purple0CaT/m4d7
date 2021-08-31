import SciFi from '../data/scifi.json'
import Fantasy from '../data/fantasy.json'
import History from '../data/history.json'
import Romance from '../data/romance.json'
import Horror from '../data/horror.json'
import SingBook from './MyCard'
import { Container ,Row, Col } from "react-bootstrap"
import React from 'react'
import Category from './Category'

class LatestRel extends React.Component{
    state = {
      books: [SciFi, Fantasy, History, Romance, Horror],
    }
    render(){
    return (
    <>
      <Container>
        <Row className="justify-content-center">
        <Col xs="12">
          <h2 className='font-weight-light'>Latest Releases</h2>
          <hr/>
        </Col>
        {
        Object.values(this.state.books).map(categor => <SingBook showThisCom={this.props.showThisCom} showCom={this.props.showCom} book={categor[0]}/>)
        }
        
        </Row>

        <Row >
        {
          Object.values(this.state.books).map(categor => <Category showThisCom={this.props.showThisCom} showCom={this.props.showCom} categor={categor}/>)
        }
        </Row>
      </Container>
    </>
    )}
}

export default LatestRel