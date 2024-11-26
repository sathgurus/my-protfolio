import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import bgImage from '../assets/images/bg-wallpaper.jpg'
import Skills from "./body/Skills";
import { Col, Container, Row } from "react-bootstrap";



const Layout = () => {
    return (
        <Container >

            <Row>
                <Col lg={12} className="">
                    <Header />
                </Col>
                <Col lg={12} className="mt-5" style={{}}>
                    <Body />
                </Col>
            </Row>
        </Container>
    )
}

export default Layout;