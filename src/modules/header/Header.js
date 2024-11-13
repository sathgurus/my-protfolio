import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import Mern from '../../assets/images/mern.png'
import flutter from '../../assets/images/flutter.png'
import dart from '../../assets/images/dart.png'
import coder from '../../assets/images/5044785.png'



const Header = () => {
    return (
        <Container fluid>
            {/* */}
            <Row>

                {/* <Col lg={6}>
                    <Navbar>
                        <Navbar.Brand href="#home">
                            <Image src={Mern} height={40} />
                        </Navbar.Brand>
                        <Navbar.Brand href="#home">
                            <Image src={flutter} height={40} />
                        </Navbar.Brand>
                        <Navbar.Brand href="#home">
                            <Image src={dart} height={40} />
                        </Navbar.Brand>
                    </Navbar>
                </Col> */}
                <Col className="d-flex justify-content-start">
                    <Navbar bg="" variant="">
                        <Navbar.Brand href="#home">
                            <Image src={coder} height={40} />
                        </Navbar.Brand>
                        <Nav className="me-auto gap-5">
                            <Nav.Link href="#home" style={{ fontWeight: 'bold' }}>Skills</Nav.Link>
                            <Nav.Link href="#about" style={{ fontWeight: 'bold' }}>Project</Nav.Link>
                            <Nav.Link href="#contact" style={{ fontWeight: 'bold' }}>Experience</Nav.Link>
                            <Nav.Link href="#contact" style={{ fontWeight: 'bold' }}>Resume</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>

            {/* */}
        </Container>
    )
}

export default Header;