import { useEffect, useState } from "react"
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap"
import { FaEnvelope, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import SectionTitle from "./SectionTitle"
import { useLoginMutation } from '../slices/usersApiSlice'
import { setCredential } from "../slices/authSlice"
import { useDispatch } from "react-redux"
import Loader from "./Loader"


const LoginModal = ({show, onHide, onSwitch}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')

    const dispatch = useDispatch();

    const [login, {isLoading: loadingLogin}] = useLoginMutation();

    const submitHandler = async(e) => {
        e.preventDefault();
        try {
            const res = await login({email, password}).unwrap();
            if(res) {
                dispatch(setCredential({...res}));
                onHide();
                e.reset();
            }
        } catch (error) {
            setErr(error?.data?.message || error.error)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setErr('');
        }, 5000);

        return () => clearTimeout(timer);
    }, [err]);

    return (
        <Modal show={show} backdrop='static' keyboard={false} onHide={onHide} centered> 
            <Modal.Header closeButton className='py-2 ps-4'>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    {err && <p className="text-danger m-0" style={{fontWeight: "bold"}}>{err}</p>}
                    <Form onSubmit={submitHandler}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Email</InputGroup.Text>
                            <Form.Control type="email" value={email} placeholder="harry@email.com"
                                onChange={(e) => setEmail(e.target.value)}/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Password</InputGroup.Text>
                            <Form.Control type="password" value={password} placeholder="******"
                                onChange={(e) => setPassword(e.target.value)} />
                        </InputGroup>
                        <Button type="submit" className="w-100 p-2" variant="success">
                        {loadingLogin ? (
                                <span><Loader size="25px"/></span>
                            ) : (
                            <>
                                <span><FaEnvelope /></span>
                                <span className="h5 ms-2 m-0"> Sign In With Email</span>
                            </>
                        )}
                        </Button> 
                        <SectionTitle center={true} colorfrom='transparent' colorto='green' margin='8px'/>
                        <Button type='button' className="w-100 p-2" variant="secondary">
                            <span><FaGithub /></span>
                            <span className="h5 ms-2 m-0"> Sign In With Github</span>
                        </Button>
                        <p className="mt-2 mb-0 text-center">If you are new here, go to <Link className="text-success" onClick={onSwitch}>Register</Link></p>
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default LoginModal