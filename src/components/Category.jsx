import SingBook from './MyCard'
import React from 'react'
import { Container ,Row, Col } from "react-bootstrap"


class Category extends React.Component{
    render(){
    return(
        <Row key={this.props.categor[0].category + this.props.categor[2]._id}>
            <Col xs="12 mt-5">
                <h2>{this.props.categor[0].category.charAt(0).toUpperCase() + this.props.categor[0].category.slice(1)}</h2>
                <hr />
            </Col>
            {
            this.props.categor.slice(1,7).map(book => <SingBook showThisCom={this.props.showThisCom} showCom={this.props.showCom} book = {book}/>)
            }
        </Row>
    )
}}
export default Category