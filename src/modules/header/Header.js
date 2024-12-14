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
import AppNavbar from "./Navbar";




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
        <Container>
            <AppNavbar />
        </Container>



    )
}

export default Header;