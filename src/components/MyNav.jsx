import { Navbar, Nav } from "react-bootstrap"


const MyNav = ()=> { 
    return (
    <Navbar onClick={(e) => console.log('clicked!', e)} collapseOnSelect expand="md" bg="light" variant="light">
    <Navbar.Brand href="#home">BookStore</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
)
}

export default MyNav