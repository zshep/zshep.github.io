import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';

const styles = {
    footer: {
        textDecoration: 'none',
        background: 'light',
        color: 'black'

    }

}


function Footer() {
    return (

        <Row className="justify-content-md-center">
            <Col md={{ span: 3 }}>
            <a href="https://github.com/zshep">GitHub</a>
            <br></br>
            </Col>
            <Col md={{ span: 3 }}>
            <a href="https://www.linkedin.com/in/shep-sheperdigian-35b94523a/">LinkedIn</a>
            </Col>
        </Row>


    );
}


export default Footer;