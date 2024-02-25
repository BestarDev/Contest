import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
    return (
        <Container className="my-2">
            <Row>
                <Col>
                    <p className="text-center">Copyright &copy; {new Date().getFullYear()}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer