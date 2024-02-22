import { Button, Form, FormControl, InputGroup, Row } from "react-bootstrap"

const ContactForm = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <Form onSubmit={submitHandler} >
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
        <Button type='submit' variant="success" className="w-100">Send</Button>
    </Form>
  )
}

export default ContactForm