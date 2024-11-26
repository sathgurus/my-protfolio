import { Col, Form, Modal } from "react-bootstrap"



const ExperienceModal = ({ show, setShow }) => {
    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Working Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Col lg={12}>
                    <h5>
                        Full-Stack Web Development Intern - KGISL Micro College
                    </h5>
                    <h6>
                        Aug 2022 - Nov 2022
                    </h6>
                </Col>
                <Col lg={12}>
                    <ul>
                        <li> Developed and maintained dynamic web pages using React.js and Bootstrap to enhance the user
                            experience.</li>
                        <li> Built backend RESTful APIs with Node.js and Express.js to handle server-side logic and database
                            interactions.</li>
                        <li>Collaborated with the team to manage MongoDB and MySQL databases for application data storage.</li>
                        <li>Integrated state management using Redux Toolkit for efficient data handling in complex UIs.</li>
                    </ul>
                </Col>
                <Col lg={12}>
                    <h5>Associate Software Engineer -  ADOL Technologies Pvt Ltd</h5>
                    <h6>
                        Nov 2022 - Present
                    </h6>
                </Col>
                <Col lg={12}>
                    <ul>
                        <li> Developed and deployed full-stack web applications using the MERN stack (MongoDB, Express.js,
                            React.js, Node.js).</li>
                        <li> Built cross-platform mobile apps with React Native and Flutter, ensuring compatibility across
                            Android and iOS devices.</li>
                        <li>Integrated RESTful APIs to connect frontends with backends, ensuring smooth data flow between
                            applications and databases.</li>
                        <li>Managed state effectively using Redux Toolkit and Bloc for complex data handling in both web and
                            mobile apps.</li>
                        <li>Implemented authentication systems (JWT and Firebase Auth) for secure user login and data access.</li>
                        <li>Conducted code reviews, testing, and debugging to maintain high code quality.</li>
                    </ul>
                </Col>
            </Modal.Body>
        </Modal>
    )
}

export default ExperienceModal;  //exporting the component to be used in other files