import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditProfileModal = ({ showModal, setShowModal, editProfile, setEditProfile, saveEdit }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control 
            type="text" 
            placeholder="Name" 
            value={editProfile?.name || ""} 
            onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })} 
          />
          <Form.Control 
            type="text" 
            placeholder="Favorite Food" 
            value={editProfile?.favoriteFood || ""} 
            onChange={(e) => setEditProfile({ ...editProfile, favoriteFood: e.target.value })} 
            className="mt-2" 
          />
          <Form.Control 
            type="text" 
            placeholder="Favorite Color" 
            value={editProfile?.favoriteColor || ""} 
            onChange={(e) => setEditProfile({ ...editProfile, favoriteColor: e.target.value })} 
            className="mt-2" 
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
        <Button 
          variant="primary" 
          onClick={saveEdit} 
          disabled={!editProfile?.name || !editProfile?.favoriteFood || !editProfile?.favoriteColor}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;