import { Nav, NavDropdown, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { FaAward, FaCalendarWeek, FaEnvelope, FaQuestion, FaUserCheck, FaUsers } from 'react-icons/fa'
import { useState } from "react"
import LoginModal from "./LoginModal"
import { createPortal } from "react-dom"

const Header = () => {
    const [show, setShow] = useState(false)
    const [collapsed, setCollapsed] = useState(false)
    
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
                            <NavDropdown.Item>Show Problems</NavDropdown.Item>
                            <NavDropdown.Item>Consult</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={
                            <>
                                <FaCalendarWeek />
                                <span>Contest</span>
                            </>
                        }>
                            <NavDropdown.Item>Create A New</NavDropdown.Item>
                            <NavDropdown.Item>Upcoming</NavDropdown.Item>
                            <NavDropdown.Item>History</NavDropdown.Item>
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
                        {!collapsed && <span className='text-white mt-2'>|</span>}
                        <Nav.Link onClick={() => setShow(!show)}>
                            {!collapsed && <>Sign In</> }
                            <FaUserCheck /> 
                            {collapsed && <>Sign In</> }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {createPortal(<LoginModal show={show} onHide={() => setShow(false)}/>, document.body)}
        </header>
    )
}

export default Header