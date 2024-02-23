import { Badge, Card, Carousel, Col, Image, ListGroup, Row, Table } from 'react-bootstrap'
import problems from '../assets/static_data/problems'
import contests from '../assets/static_data/contests'
import users from '../assets/static_data/users'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'

const HomeScreen = () => {
    problems.sort((a, b) => b.accept - a.accept).sort((a, b) => b.submit - a.submit)
    users.sort((a, b) => b.mark - a.mark)

    const submitHandler =(e) => {
        e.preventDefault();
    }
    
    return (
        <Row className='p-0'>
            <Col lg={6} xl={4} className='mb-2'>
                <Card>
                    <Card.Header><h3 className='m-0 text-center text-success'>Hot Problems</h3></Card.Header>
                    <Card.Body className='px-0'>
                        <ListGroup variant='flush'>
                        { problems.map((prob) => (
                            <ListGroup.Item key={prob._id} className='d-flex justify-content-between align-items-center'>
                                <div className='me-auto'>{prob.title}</div>
                                <Badge pill bg={prob.accept / prob.submit > 0.5 ? 
                                    prob.accept / prob.submit > 0.8 ? 'success' : 'warning'
                                    : 'danger' }>{prob.accept} / {prob.submit}</Badge>
                            </ListGroup.Item>
                        ))}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6} xl={4} className='mb-2'>
                <Carousel className='mb-2'>
                    {contests.map(contest => (
                        <Carousel.Item key={contest._id}>
                            <Image src={contest.images} alt={contest.title} fluid rounded/>
                            <Carousel.Caption className='text-success'>
                                <h3>{contest.title}</h3>
                                <p>Start At: {contest.startDate}</p>
                                <p>End At: {contest.endDate}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Card>
                    <Card.Header><h3 className='m-0 text-center text-success'>Top Coders</h3></Card.Header>
                    <Card.Body className='px-1 pb-0'>
                        <Table striped hover responsive className='text-center'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Submit</th>
                                    <th>Accepted</th>
                                    <th>Contests</th>
                                </tr>
                            </thead>
                            <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td><Badge pill bg={(user?.submit && user.submit) > 100 ? 'success' :
                                        (user?.submit && user.submit) > 50 ? 'warning' : 'danger'}>{user.submit}</Badge></td>
                                    <td><Badge pill bg={(user?.accept && user.accept) > 80 ? 'success' : 
                                        (user?.accept && user.accept) > 40 ? 'warning' : 'danger'}>{user.accept}</Badge></td>
                                    <td>{user?.contests ? Object.keys(user.contests).length : 0 }</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Row>
                    <Col xl={12} lg={6}>
                        <Card>
                            <Card.Header><h3 className='m-0 text-center text-success'>Contests History</h3></Card.Header>
                            <Card.Body className='px-0'>
                                <Table striped hover responsive className='text-center'>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Status</th>
                                            <th>Members</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {contests.map(contest => (
                                        <tr key={contest._id}>
                                            <td>{contest.title}</td>
                                            <td>{contest.status}</td>
                                            <td>{contest.participants.length}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={12} lg={6}>
                        <SectionTitle>
                            <h2 className='text-success'>Contact Us</h2>
                        </SectionTitle>
                        <ContactForm onSubmit={submitHandler}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HomeScreen