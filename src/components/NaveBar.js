import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../styles/navebar.css'
function NaveBar() {

  return (
    <Navbar collapseOnSelect  expand="lg" className="navebar" variant="dark">
      <Container>
      <Navbar.Brand className='navbarlink' href="#home">
        <img 
        className='nevebarlogo'
        src='img/mainLogoW.png'
        alt='Brand'
        /> 
      </Navbar.Brand>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="me-auto linkContener">
            <Nav.Link className='navbarlink' href="#servces">Servces</Nav.Link>
            <Nav.Link className='navbarlink' href="#about">About Us</Nav.Link>
            <Nav.Link className='navbarlink' href="#protfolo">Protfolo </Nav.Link>
            <Nav.Link className='navbarlink' href="#contactUs">Contact Us </Nav.Link>
          </Nav>
            <Nav.Link className='navbarSubscribe' eventKey={2} href="#Subscribe">
              Subscribe 
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NaveBar;
