import React from "react";
import { Button, Form } from "react-bootstrap";

const AddProfileForm = ({ newProfile, setNewProfile, addProfile }) => {
  return (
    <Form className="mb-3">
      <Form.Group>
        <Form.Control 
          type="text" 
          placeholder="Name" 
          value={newProfile.name} 
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })} 
        />
        <Form.Control 
          type="text" 
          placeholder="Favorite Food" 
          value={newProfile.favoriteFood} 
          onChange={(e) => setNewProfile({ ...newProfile, favoriteFood: e.target.value })} 
          className="mt-2" 
        />
        <Form.Control 
          type="text" 
          placeholder="Favorite Color" 
          value={newProfile.favoriteColor} 
          onChange={(e) => setNewProfile({ ...newProfile, favoriteColor: e.target.value })} 
          className="mt-2" 
        />
      </Form.Group>
      <Button 
        variant="primary" 
        className="mt-3" 
        onClick={addProfile}
        disabled={!newProfile.name || !newProfile.favoriteFood || !newProfile.favoriteColor}
      >
        Add Profile
      </Button>
    </Form>
  );
};

export default AddProfileForm;