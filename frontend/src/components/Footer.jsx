import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <Container className="my-2">
        <Row>
            <Col>
                <h5 className="text-center">Copyright &copy; {new Date().getFullYear()}</h5>
                <div className="text-center">(Authored by BestarDev)</div>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer