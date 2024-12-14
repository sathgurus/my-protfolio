import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import bgImage from '../assets/images/bg-wallpaper.jpg'
import Skills from "./body/Skills";
import { Col, Container, Row } from "react-bootstrap";
import ProfileSection from '../modules/body/ProfileSection'
import ExperienceContent from "./body/components/ExperienceContent";
import ProjectSection from "./body/components/ProjectsSection";
import backgroundVideo from '../assets/video/fruit (online-video-cutter.com).mp4'



const Layout = () => {


    return (

        <Container >
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10, }}>
                <Header />
            </div>
            <div style={{ paddingTop: '80px' }}>

                <section id="about" className="mb-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                    <ProfileSection />
                </section>
                <section className="mb-5" id="experience" style={{ minHeight: '100vh' }}>
                    <Col lg={12} className="d-flex justify-content-center">
                        <h1 style={{ fontWeight: '600',textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>Experience</h1>
                    </Col>
                    <ExperienceContent />
                </section>
                <section id="project" className="mb-5" style={{ minHeight: '100vh' }}>
                    <Col lg={12} className="d-flex justify-content-center" >
                        <h1 style={{ fontWeight: '600', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>
                            Projects
                        </h1>
                    </Col>
                    <ProjectSection />
                </section>

                <section id="skills" className="" style={{ minHeight: '100vh' }}>
                    <Col lg={12} className="d-flex justify-content-center" >
                        <h1 style={{ fontWeight: '600', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>
                            Skills
                        </h1>
                    </Col>
                    <Skills />
                </section>
            </div>
        </Container>

    )
}

export default Layout;