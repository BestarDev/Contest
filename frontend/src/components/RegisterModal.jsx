import { useState } from 'react'
import { Button, Col, Container, Form, Image, InputGroup, Modal, Row } from 'react-bootstrap'
import { FaUpload } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const RegisterModal = ({show, onHide, onSwitch}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitHandler = () => {

    }

    return (
        <Modal backdrop='static' keyboard={false} centered show={show} onHide={onHide}>
            <Container>
                <Modal.Header closeButton className='py-2 ps-4'>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                        <Row>
                            <Col sm={4}>
                                <Image src='/images/userDefault.jpg' className='w-100' fluid roundedCircle/>
                                <Col className='d-flex justify-content-center'>
                                    <Button className='btn my-1 mx-auto w-auto py-1' variant='outline-secondary'
                                        style={{border: '1px dashed grey'}}>
                                            <FaUpload />
                                            <div>Upload photo</div>
                                    </Button>
                                </Col>
                            </Col>
                            <Col sm={8}>
                                <Form.Group controlId='name' className='mb-3'>
                                    <InputGroup>
                                        <InputGroup.Text>Name</InputGroup.Text>
                                        <Form.Control type='text' value={name} placeholder='Enter Your Name'
                                            onChange={(e) => setName(e.target.value)} />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId='email' className='mb-3'>
                                    <InputGroup>
                                        <InputGroup.Text>Email</InputGroup.Text>
                                        <Form.Control type='email' value={email} placeholder="example@email.com"
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId='password' className='mb-3'>
                                    <InputGroup>
                                        <InputGroup.Text>Password</InputGroup.Text>
                                        <Form.Control type='password' value={password} placeholder='******'
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId='confirmpwd'>
                                    <InputGroup>
                                        <InputGroup.Text>Confirm</InputGroup.Text>
                                        <Form.Control type='password' value={confirmPassword} placeholder='******'
                                            onChange={(e) => setConfirmPassword(e.target.value)} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col className='d-flex align-items-center'>
                                <p className="my-1 text-center">If you already have an account, go to <Link onClick={onSwitch} className="text-success">Login</Link></p>
                            </Col>
                            <Col sm='auto' className='d-flex align-items-center pe-3'>
                                <Button type='submit' className='ms-auto btn btn-success ps-4 pe-4'>Sign Up</Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Container>
        </Modal>
    )
}

export default RegisterModal