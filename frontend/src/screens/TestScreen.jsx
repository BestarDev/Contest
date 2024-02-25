import { useState } from 'react';
import { Modal, Button, Toast } from 'react-bootstrap';

const TestScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleFormSubmit = () => {
    // Perform form submission logic

    // Close the modal
    handleModalClose();

    // Show the toast message
    setShowToast(true);

    // Hide the toast after a delay
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Adjust the delay as needed
  };

  return (
    <div>
      <Button onClick={handleModalShow}>Open Modal</Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your form goes here */}
          <form onSubmit={handleFormSubmit}>
            {/* Form inputs go here */}
            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>

      <div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
        }}
      >
        <Toast show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <strong className="me-auto">Form Submitted</strong>
          </Toast.Header>
          <Toast.Body>Your form has been successfully submitted!</Toast.Body>
        </Toast>
      </div>
    </div>
  );
};

export default TestScreen;
