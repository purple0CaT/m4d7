import { Jumbotron, Container } from "react-bootstrap"

const MyJumbotron = () => {
    return (
        <Jumbotron fluid >
          <Container>
            <h1 className='font-weight-light'>Welcome to <small className='font-weight-bold'>Not</small>BookStore!</h1>
          </Container>
        </Jumbotron>
    )
}

export default MyJumbotron