import SciFi from '../data/scifi.json'
import Fantasy from '../data/fantasy.json'
import History from '../data/history.json'
import Romance from '../data/romance.json'
import Horror from '../data/horror.json'
import SingBook from './MyCard'
import { Container ,Row, Col } from "react-bootstrap"
import React from 'react'
import Category from './Category'
import { useState } from 'react'

const LatestRel = ({showThisCom, showCom})=>{

    const [State, setState] = useState({
      books: [SciFi, Fantasy, History, Romance, Horror],
    })
    return (
    <>
      <Container>
        <Row className="justify-content-center">
        <Col xs="12">
          <h2 className='font-weight-light'>Latest Releases</h2>
          <hr/>
        </Col>
        {
        Object.values(State.books).map(categor => <SingBook showThisCom={showThisCom} book={categor[0]}/>)
        }
        
        </Row>

        <Row >
        {
          Object.values(State.books).map(categor => <Category showThisCom={showThisCom} showCom={showCom} categor={categor}/>)
        }
        </Row>
      </Container>
    </>
    )}


export default LatestRel