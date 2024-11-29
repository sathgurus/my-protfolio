import { Col, Container, Form, Image, Row } from "react-bootstrap";
import htmlLogo from '../../assets/images/html-design-logo.png'


const Skills = () => {
    return (
        <>
            <Col lg={12}>
                <Form.Label style={{ color: 'black', fontSize: '16px',  fontWeight: 'bold', borderBottom: '1px solid gray' }}>
                    <h1>Technical Skills</h1>
                </Form.Label><br />
                <Form.Label style={{ color: 'black', fontSize: '22px',  fontWeight: 'bold', }}>
                    <h5> Web Development</h5>
                </Form.Label>
            </Col>
            <Col lg={12}>
                <ul>
                    <li><span style={{ fontWeight: 'bold' }}>Frontend:</span> HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap</li>
                    <li><span style={{ fontWeight: 'bold' }}>Backend:</span> Node.js, Express.js</li>
                    <li><span style={{ fontWeight: 'bold' }}>Databases:</span> MongoDB, MySQL</li>
                    <li><span style={{ fontWeight: 'bold' }}>Other Tools:</span> Redux Toolkit, RESTful APIs</li>
                </ul>
            </Col>
            <Col lg={12}>

                <Form.Label style={{ color: 'black', fontSize: '22px', fontWeight: 'bold', }}>
                    <h5> Mobile App Development</h5>
                </Form.Label>
            </Col>
            <Col lg={12}>
                <ul>
                    <li><span style={{ fontWeight: 'bold' }}>Frameworks:</span> Flutter, React Native</li>
                    <li><span style={{ fontWeight: 'bold' }}>Languages:</span> Dart</li>
                    <li><span style={{ fontWeight: 'bold' }}>State Management:</span> Bloc, Provider</li>
                </ul>
            </Col>
            <Col lg={12}>

                <Form.Label style={{ color: 'black', fontSize: '22px', fontWeight: 'bold', }}>
                    <h5>General Programming Skills</h5>
                </Form.Label>
            </Col>
            <Col lg={12}>
                <ul>
                    <li><span style={{ fontWeight: 'bold' }}>Languages:</span> Core Java, C, C++</li>
                    <li><span style={{ fontWeight: 'bold' }}>Version Control:</span> Git, GitHub</li>
                    <li><span style={{ fontWeight: 'bold' }}>Tools:</span> VS Code, Android Studio</li>
                </ul>
            </Col>
        </>
    )
}

export default Skills;