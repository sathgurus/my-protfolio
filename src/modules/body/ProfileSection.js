import { Col, Container, Row } from "react-bootstrap";
import ProfilePicture from "./components/ProfilePicture";
import Header from "../header/Header";
import AboutMe from "./components/AboutMe";



const ProfileSection = () => {
    return (
        <Container >
            <Col lg={12} className="">
                <ProfilePicture />
            </Col>
        </Container>
    )
}

export default ProfileSection;