import { Button, Col, Row } from "react-bootstrap"



const ContactSection = () => {
    return (
        <>
            <Row className="mb-4">
                <Col md={3} xs={6} className="mt-4">
                    <Button variant="" style={{backgroundColor:'black',color:'white',borderRadius:'20px',fontSize:'12px'}}>
                        <a href="#about"> Talk with me</a>
                       
                    </Button>
                </Col>
                <Col md={3} xs={6} className="mt-4">
                    <Button variant="outline-secondary" style={{borderRadius:'20px',color:'black',fontSize:'12px'}}>
                        See my work
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default ContactSection;  