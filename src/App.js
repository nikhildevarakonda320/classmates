import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Button, Form, Modal } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const App = () => {

  ///Added Static Data for the user to view the data using ag-grid and useState hook
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Preetham", favoriteFood: "Chicken Biryani", favoriteColor: "Blue", likes: 0 },
    { id: 2, name: "Shiva Sai", favoriteFood: "South Indian food", favoriteColor: "Red", likes: 0 },
    { id: 3, name: "Pranadeep", favoriteFood: "Mutton ghosh", favoriteColor: "Purple", likes: 0 }
  ]);

  ///Added useState hook for the user to add the data and edit the data
  const [newProfile, setNewProfile] = useState({ name: "", favoriteFood: "", favoriteColor: "" });
  const [editProfile, setEditProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);


  ///Added the functionality for the user to add the data and edit the data
  const addProfile = () => {
    if (!newProfile.name || !newProfile.favoriteFood || !newProfile.favoriteColor) return;
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1, likes: 0 }]);
    setNewProfile({ name: "", favoriteFood: "", favoriteColor: "" });
  };

  ///Added the functionality for the user to delete the data
  const deleteProfile = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  ///Added the functionality for the user to like the data
  const likeProfile = (id) => {
    setProfiles(prevProfiles => 
      prevProfiles.map(profile => 
        profile.id === id 
          ? { ...profile, likes: profile.likes + 1 } 
          : profile
      )
    );
  };


  ///Added the functionality for the user to edit the data
  const handleEdit = (profile) => {
    setEditProfile({ ...profile });
    setShowModal(true);
  };


  ///Added the functionality for the user to save the data
  const saveEdit = () => {
    if (!editProfile) return;
    setProfiles(profiles.map(profile => 
      profile.id === editProfile.id ? { ...editProfile } : profile
    ));
    setShowModal(false);
  };


  ///Added the functionality for the user to like the data
  const ActionButtons = (params) => (
    <div className="action-buttons-container">
      <Button variant="success" size="sm" onClick={() => likeProfile(params.data.id)}>Like</Button>
      <Button variant="warning" size="sm" onClick={() => handleEdit(params.data)}>Edit</Button>
      <Button variant="danger" size="sm" onClick={() => deleteProfile(params.data.id)}>Delete</Button>
    </div>
  );
  

  ///Added the functionality for the user to sort the data and filter the data
  const columnDefs = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Favorite Food", field: "favoriteFood", sortable: true, filter: true },
    { headerName: "Favorite Color", field: "favoriteColor", sortable: true, filter: true },
    { headerName: "Likes", field: "likes", sortable: true },
    {
      headerName: "Actions",
      cellRenderer: ActionButtons
    }
  ];

  ///Added the functionality for the user to view the data
  return (
    <div className="container mt-4">
      <h2>My Class Mates</h2>

      {/* Form for the user to enter the user details */}
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
          className="mt-2" 
          onClick={addProfile}
          disabled={!newProfile.name || !newProfile.favoriteFood || !newProfile.favoriteColor}
        >
          Add Profile
        </Button>
      </Form>

      {/* Grid for the user to view the user details */}
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact 
          rowData={profiles} 
          columnDefs={columnDefs} 
          pagination={true} 
          modules={[ClientSideRowModelModule]}
        />
      </div>

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
    </div>
  );
};

export default App;