import { Button, Col, Container, Form, Image, Nav, Navbar, Row } from "react-bootstrap";
import Mern from '../../assets/images/mern.png'
import flutter from '../../assets/images/flutter.png'
import dart from '../../assets/images/dart.png'
import coder from '../../assets/images/5044785.png'
import SkillsModal from "../body/components/Modal/SkillsModal";
import { useEffect, useRef, useState } from "react";
import ExperienceModal from "../body/components/Modal/ExperienceModal";
import ProjectModal from "../body/components/Modal/ProjectModal";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ResponsiveNavbar from "./Dropdown";




const Header = () => {

    const [skills, setSkills] = useState(false);
    const [experience, setExperience] = useState(false);
    const [project, setProject] = useState(false)

    const componentRef = useRef(null);

    const handleSkills = () => {
        setSkills(true)
    }

    const handleExperience = () => {
        setExperience(true)
    }

    const handleProject = () => {
        setProject(true)
    }

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // console.log('size lisened')
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [showExperience, setShowExperience] = useState(false);
    const experienceRef = useRef(null);





    return (
        <Container fluid>
            {/* */}
            {isMobile ? <ResponsiveNavbar />
                : <Row className="align-items-center mt-2 mb-5">
                    <Col lg={3}> <Image src={coder} height={40} /></Col>

                    <Col className="" lg={9}>
                        <Row >
                            {/*  */}
                            <Col lg={3} style={{ color: '#e2ebf0', }}>
                                <Form.Label style={{ cursor: 'pointer', fontWeight: 'bold' }} >
                                    <a href="#skills" style={{ textDecoration: 'none', color: '#e2ebf0' }}>
                                        Skills
                                    </a>
                                </Form.Label>
                            </Col>

                            <Col lg={3} style={{ color: '#e2ebf0', }}>
                                <Form.Label style={{ cursor: 'pointer', fontWeight: 'bold' }} >
                                    <a href="#experience" style={{ textDecoration: 'none', color: '#e2ebf0' }}>
                                        Experience
                                    </a>

                                </Form.Label></Col>
                            <Col lg={3} style={{ color: '#e2ebf0', }}>
                                <Form.Label style={{ cursor: 'pointer', fontWeight: 'bold' }} >
                                    <a href="#project" style={{ textDecoration: 'none', color: '#e2ebf0' }}>
                                        Project
                                    </a>
                                </Form.Label></Col>
                            <Col lg={3} style={{ color: '#e2ebf0', fontWeight: 'bold' }}>  <Form.Label style={{ cursor: 'pointer' }} >
                                <a style={{ textDecoration: 'none', color: 'white' }} href="/Sathgurunathan_resume.pdf" download="Sathgurunathan_Resume.pdf">
                                    Resume
                                </a>
                            </Form.Label></Col>
                        </Row>
                    </Col>
                    {/* <Col lg={3} className="d-flex justify-content-end">
                        <Button variant="outline-light" style={{ borderRadius: '20px', fontSize: '12px' }}>
                            See my work
                        </Button>
                    </Col> */}
                </Row>}

            {skills && <SkillsModal show={skills} setShow={setSkills} />}
            {experience && <ExperienceModal show={experience} setShow={setExperience} />}
            {project && <ProjectModal show={project} setShow={setProject} />}
        </Container>
    )
}

export default Header;