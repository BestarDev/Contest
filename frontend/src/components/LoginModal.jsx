import { useState } from "react"
import { Button, Container, Form, Modal } from "react-bootstrap"
import { FaEnvelope, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import SectionTitle from "./SectionTitle"


const LoginModal = ({show, onHide}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Login...")
    }

    return (
        <Modal show={show} backdrop='static' keyboard={false} onHide={onHide} centered> 
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="email" className="mb-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" value={email} 
                                onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="password" className="mb-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button type="submit" className="w-100 p-2 my-2" variant="success">
                            <span><FaEnvelope /></span>
                            <span className="h5 ms-2 m-0"> Sign In With Email</span>
                        </Button> 
                        <SectionTitle center={true} colorfrom='transparent' colorto='green' margin='8px'/>
                        <Button type='button' className="w-100 p-2 my-2" variant="secondary">
                            <span><FaGithub /></span>
                            <span className="h5 ms-2 m-0"> Sign In With Github</span>
                        </Button>
                        <p className="my-1 text-center">If you are a new coder, go <Link to="/" className="text-success">Register</Link></p>
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default LoginModal