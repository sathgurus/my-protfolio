import { Col, Form, Modal } from "react-bootstrap"



const SkillsModal = ({ show, setShow }) => {
    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Technical Skills</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Col lg={12}>
                    <Form.Label style={{ color: 'black', fontSize: '22px', fontFamily: 'cursive', fontWeight: 'bold', }}>
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

                    <Form.Label style={{ color: 'black', fontSize: '22px', fontFamily: 'cursive', fontWeight: 'bold', }}>
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

                    <Form.Label style={{ color: 'black', fontSize: '22px', fontFamily: 'cursive', fontWeight: 'bold', }}>
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
            </Modal.Body>
        </Modal>
    )
}

export default SkillsModal;  //exporting the component to be used in other files