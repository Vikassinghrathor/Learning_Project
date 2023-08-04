import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/Navbar.css';

function Navbar1() {
  return (
    <>
      <Navbar style={{backgroundColor: "#f9cdcd"}}>
        <Container>
          <Navbar.Brand href="#home">Basic/Dept</Navbar.Brand>
          <Nav className="me-auto" style={{textAlign: "center",display: "flex" , justifyContent: "center" , padding: "20px", margin: "auto" , textIndent: "40px"}}>
            <Nav.Link href="#home">WORK</Nav.Link>
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">NEWS</Nav.Link>
            <Nav.Link href="#home">THINKING</Nav.Link>
            <Nav.Link href="#features">CARRIER</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;