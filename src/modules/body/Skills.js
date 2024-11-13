import { Col, Container, Image, Row } from "react-bootstrap";
import htmlLogo from '../../assets/images/html-design-logo.png'


const Skills = () => {
    return (
        <Container fluid>
             <Row>
                <Col lg={12}>
                <h1 style={{ color: '#6c757d', fontSize: '30px' }}>SKILLS</h1>
                </Col>
            </Row >
            <Row className="mt-3">
                <Col lg={1}>
                    <Image src={htmlLogo} height={100} />
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;