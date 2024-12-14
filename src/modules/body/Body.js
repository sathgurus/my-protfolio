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
                {/* <Col lg={12}>
                   

                                <section id="skills">
                                    <Skills />
                                </section>
                          
                </Col> */}

                <Col lg={12} style={{height:'calc(100vh - 1px)'}}>

                    <section id="experience">
                        <ExperienceContent />
                    </section>


                </Col>
                <Col lg={10}>
                    <Card className="mt-3">
                        <Card.Body style={{ background: '' }}>
                            <Row>
                                <section id="project">
                                    <ProjectSection />
                                </section>

                            </Row>
                        </Card.Body>
                    </Card></Col>
                <Col lg={2} className="">
                </Col>
               

            </Row>
        </Container>
    )
}

export default Body;