import { Col, Container, Image, Row } from "react-bootstrap";
import user from '../../assets/images/IMG_20230612_211530_578.jpg'
import Mern from '../../assets/images/mern.png'



const Body = () => {
    return (
        <Container fluid >
            <div className="d-flex   flex-column justify-content-center" style={{ height: '70vh' }}>
                <Row>
                    <Col lg={3} className="mt-5">
                        <h1 style={{ color: '#6c757d', fontSize: '30px' }}>Hello, I am Sathgurunathan S</h1>

                    </Col>
                    <Col lg={9}>
                        <Image src={Mern} height={150} />
                        <h3 style={{ textAlign: 'center', fontSize: '40px', color: '#6c757d' }} >Developer</h3>
                    </Col>
                    {/* <Col lg={3} className="mt-5">
                        <h1 style={{ color: '#6c757d', fontSize: '30px' }}>M.Sc Computer Sciene</h1>
                    </Col> */}
                </Row>

            </div>

        </Container>
    )
}

export default Body;