import { Button, Form, FormControl, InputGroup, Row } from "react-bootstrap"
import { FaAirbnb, FaFly, FaPaperPlane, FaPlane } from "react-icons/fa"

const ContactForm = ({onSubmit}) => {
    return (
        <Form onSubmit={onSubmit} >
            <InputGroup>
                <InputGroup.Text id='title'>Title</InputGroup.Text>
                <FormControl type='text' placeholder='Your Title'
                    aria-describedby='title' aria-label='title' />
            </InputGroup>
            <Form.Floating className="mt-2 mb-2">
                <Form.Control
                    id="comment"
                    as="textarea"
                    style={{height: '25vh'}}
                    placeholder="Leave Your Comment Here..."
                />
                <Form.Label htmlFor="comment">Your Comment</Form.Label>
            </Form.Floating>
            <Button type='submit' variant="success" className="w-100">
                <FaPaperPlane /><span className="ps-2 h5">Send</span>
            </Button>
        </Form>
    )
}

export default ContactForm