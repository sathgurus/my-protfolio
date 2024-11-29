import { Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import user from '../../assets/images/IMG_20230612_211530_578.jpg'
import Mern from '../../assets/images/mern.png'
import profilePicture from '../../assets/images/IMG_20230612_211530_578.jpg'
import AboutMe from "./components/AboutMe";
import ProfilePicture from "./components/ProfilePicture";
import ContactSection from "./components/ContactSection";
import ExperienceContent from "./components/ExperienceContent";
import Skills from "./Skills";
import ProjectSection from "./components/ProjectsSection";



const Body = () => {
    return (
        <Container fluid >
            <Row>
                <Col lg={6} className="">
                    <ProfilePicture />

                </Col>
                <Col lg={6}>
                    <Card className="mt-3">
                        <Card.Body className="" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                            <Row>
                                <AboutMe />
                            </Row>
                            {/* <Row style={{ borderTop: '1px solid gray' }}>
                                <ContactSection />
                            </Row> */}

                        </Card.Body>
                    </Card>
                    {/* <Card className="mt-3">
                        <Card.Body style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                            <Row>
                                <ExperienceContent />
                            </Row>
                        </Card.Body>
                    </Card> */}
                </Col>
                <Col lg={8}>
                    <Card className="mt-3">
                        <Card.Body style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                            <Row>

                                <section id="skills">
                                    <Skills />
                                </section>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}></Col>
                <Col lg={3}></Col>
                <Col lg={9}>
                    <Card className="mt-3">
                        <Card.Body style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                            <Row>
                                <section id="experience">
                                    <ExperienceContent />
                                </section>

                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={9}>
                <Card className="mt-3">
                        <Card.Body style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                            <Row>
                                <section id="project">
                                    <ProjectSection />
                                </section>

                            </Row>
                        </Card.Body>
                    </Card></Col>
            </Row>
        </Container>
    )
}

export default Body;