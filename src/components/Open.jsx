import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Open() {
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Open</h1>
            </div>
            <div className="card-body"></div>
            <div className="card-footer">
              <button onClick={handleAdd}>Add</button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
