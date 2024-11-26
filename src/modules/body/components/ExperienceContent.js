import { Col, Form } from "react-bootstrap";



const ExperienceContent = () => {
    return (
        <>
            <Col lg={12} className="mt-2" >
                <Form.Label style={{ color: 'black', fontSize: '16px', fontFamily: 'cursive', fontWeight: 'bold', borderBottom: '1px solid gray' }}>
                    <h1>Working Experience</h1>
                </Form.Label>
            </Col>

            <Col lg={12}>
                <h5>
                    Full-Stack Web Development Intern
                </h5>
                <h6>
                    KGISL Micro College  -  Aug 2022 - Nov 2022
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
                <h5>Associate Software Engineer</h5>
                <h6>
                    Adol Technologies Pvt Ltd  -  Nov 2022 - Present
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


        </>
    )
}

export default ExperienceContent;