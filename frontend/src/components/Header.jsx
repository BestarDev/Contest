import { Image, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { FaAward, FaCalendarWeek, FaQuestion, FaSignOutAlt, FaUserCheck, FaUsers } from 'react-icons/fa'
import { useState } from "react"
import LoginModal from "./LoginModal"
import { createPortal } from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import { useLogoutMutation } from "../slices/usersApiSlice"
import { logout } from "../slices/authSlice"
import RegisterModal from "./RegisterModal"

const Header = () => {
    const { userInfo } = useSelector(state => state.auth);

    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [collapsed, setCollapsed] = useState(false)

    const dispatch = useDispatch();

    const [logoutApi] = useLogoutMutation();

    const logoutHandler = async() => {
        await logoutApi();
        dispatch(logout());
    }

    const switchHandler = () => {
        setShowLogin(!showLogin);
        setShowRegister(!showRegister);
    }
    
    return (
        <header>
            <Navbar expand='lg' variant='dark' sticky='top' collapseOnSelect 
                className="bg-success px-5 py-2" onToggle={() => setCollapsed(!collapsed)}>
                <LinkContainer to='/'>
                    <Navbar.Brand className='d-flex align-items-center'>
                        <img src='/logo.svg' alt='Contest' width={'50px'} height={'50px'} style={{color: 'white'}}/>
                        <span className="h2">ontest</span>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='header-bar' />
                <Navbar.Collapse id='header-bar'>
                    <Nav className='ms-auto'>
                        <NavDropdown title={
                            <>
                                <FaQuestion />
                                Problems
                            </>
                        }>
                            <LinkContainer to='/problems/show'>
                                <NavDropdown.Item>Show Problems</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/problems/consult'>
                                <NavDropdown.Item>Consult</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title={
                            <>
                                <FaCalendarWeek />
                                <span>Contest</span>
                            </>
                        }>
                            <LinkContainer to='/contest/new'>
                                <NavDropdown.Item>Create A New</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/contest/log'>
                                <NavDropdown.Item>Show Log</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to='/rank'>
                            <Nav.Link>
                                <FaUsers />
                                RankList
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/certify'>
                            <Nav.Link>
                                <FaAward /> Certify
                            </Nav.Link>
                        </LinkContainer>
                        {userInfo ? (
                            <>
                                <Image src={userInfo.photo} alt="#" roundedCircle 
                                    width={'30px'} height={'30px'} className="ms-2 my-auto hide-lg"/>
                                <NavDropdown title={(<><FaUserCheck className="show-lg" /> {userInfo.name}</>)} align='end'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/invite'>
                                        <NavDropdown.Item>Message</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Divider className="my-1"/>
                                    <NavDropdown.Item onClick={logoutHandler}><FaSignOutAlt /> Log Out</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <span className='text-white mt-2 hide-lg'>|</span>
                                <Nav.Link onClick={() => setShowLogin(!showLogin)}>
                                    <FaUserCheck /> 
                                    Sign In
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {createPortal(<LoginModal show={showLogin} onHide={() => setShowLogin(false)} onSwitch={switchHandler}/>, document.body)}
            {createPortal(<RegisterModal show={showRegister} onHide={() => setShowRegister(false)} onSwitch={switchHandler}/>, document.body)}
        </header>
    )
}

export default Header