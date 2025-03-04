// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";

// // Here I have created an array of objects which consists of the user details which consists of his name , fovourite food, Favourite color

// const people = [
//   { name: "Preetham", favoriteFood: "Chicken Biryani", favoriteColor: "Blue" },
//   { name: "Shiva Sai", favoriteFood: "South Indian food", favoriteColor: "Red" },
//   { name: "Pranadeep", favoriteFood: "Mutton ghosh", favoriteColor: "Pink" },
//   { name: "Greeshma", favoriteFood: "Fish", favoriteColor: "Green" }
// ];

// // Here i haev created an prop named as person which will be retreving the data present in the people array of objects

// //  Also i have created and useState hookm which will store the count of the likes clicked when the user click on the like button

// // I have also created an small animation when the user clicks on the like button he will see an Love symbol animation

// const Card = ({ person }) => {
//   const [likes, setLikes] = useState(0);
//   const [showLove, setShowLove] = useState(false);

//   const handleLike = () => {
//     setLikes(likes + 1);
//     setShowLove(true);
//     setTimeout(() => setShowLove(false), 1000);
//   };

//   return (
//     <div className="col-12 mb-4">

//       {/* Here I have created an Card to Dispaly the classmates details */}
//       <div className="card text-center custom-card">
//         <div className="card-body">
//           <h3 className="card-title text-primary">{person.name}</h3>
//           <p className="card-text">Favorite Color: {person.favoriteColor}</p>
//           <p className="card-text">Favorite Food: {person.favoriteFood}</p>
          
//           {/* Button for the Like */}
//           <button className="btn btn-success" onClick={handleLike}>
//             Like {likes}
//           </button>
//           {/* Small Animation */}
//           {showLove && <div className="love-animation">❤️</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Create an container called my classmates
// const MyClassmates = () => {
//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4 align-items-left">My Classmates</h1>

//       {/* Here i have created an map function to iterete through the people object to display their details */}
//       <div className="row flex-column align-items-center">
//         {people.map((person, index) => (
//           <Card key={index} person={person} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyClassmates;


// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";
// import { Table, Button, Form } from "react-bootstrap";

// const App = () => {
//   const [profiles, setProfiles] = useState([
//     { id: 1, name: "Preetham", favoriteFood: "Chicken Biryani", favoriteColor: "Blue", likes: 0 },
//     { id: 2, name: "Shiva Sai", favoriteFood: "South Indian food", favoriteColor: "Red", likes: 0 },
//     { id: 3, name: "Pranadeep", favoriteFood: "Mutton ghosh", favoriteColor: "Purple", likes: 0 }
//   ]);

//   const [newProfile, setNewProfile] = useState({ name: "", favoriteFood: "", favoriteColor: "" });

//   const addProfile = () => {
//     if (!newProfile.name || !newProfile.favoriteFood || !newProfile.favoriteColor) return;
//     setProfiles([...profiles, { ...newProfile, id: profiles.length + 1, likes: 0 }]);
//     setNewProfile({ name: "", favoriteFood: "", favoriteColor: "" });
//   };

//   const deleteProfile = (id) => {
//     setProfiles(profiles.filter(profile => profile.id !== id));
//   };

//   const likeProfile = (id) => {
//     setProfiles(profiles.map(profile => profile.id === id ? { ...profile, likes: profile.likes + 1 } : profile));
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Student Connect</h2>
//       <Form className="mb-3">
//         <Form.Group>
//           <Form.Control type="text" placeholder="Name" value={newProfile.name} onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })} />
//           <Form.Control type="text" placeholder="Favorite Food" value={newProfile.favoriteFood} onChange={(e) => setNewProfile({ ...newProfile, favoriteFood: e.target.value })} className="mt-2" />
//           <Form.Control type="text" placeholder="Favorite Color" value={newProfile.favoriteColor} onChange={(e) => setNewProfile({ ...newProfile, favoriteColor: e.target.value })} className="mt-2" />
//         </Form.Group>
//         <Button variant="primary" className="mt-2" onClick={addProfile}>Add Profile</Button>
//       </Form>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Favorite Food</th>
//             <th>Favorite Color</th>
//             <th>Likes</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {profiles.map(profile => (
//             <tr key={profile.id}>
//               <td>{profile.name}</td>
//               <td>{profile.favoriteFood}</td>
//               <td>{profile.favoriteColor}</td>
//               <td>{profile.likes}</td>
//               <td>
//                 <Button variant="success" size="sm" onClick={() => likeProfile(profile.id)}>Like</Button>{' '}
//                 <Button variant="danger" size="sm" onClick={() => deleteProfile(profile.id)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";
// import { Table, Button, Form, Modal } from "react-bootstrap";
// import { AgGridReact } from "ag-grid-react";
// import { ClientSideRowModelModule } from "ag-grid-community";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

// const StudentConnect = () => {
//   const [profiles, setProfiles] = useState([
//     { id: 1, name: "Preetham", favoriteFood: "Chicken Biryani", favoriteColor: "Blue", likes: 0 },
//     { id: 2, name: "Shiva Sai", favoriteFood: "South Indian food", favoriteColor: "Red", likes: 0 },
//     { id: 3, name: "Pranadeep", favoriteFood: "Mutton ghosh", favoriteColor: "Purple", likes: 0 }
//   ]);

//   const [newProfile, setNewProfile] = useState({ name: "", favoriteFood: "", favoriteColor: "" });
//   const [editProfile, setEditProfile] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const addProfile = () => {
//     if (!newProfile.name || !newProfile.favoriteFood || !newProfile.favoriteColor) return;
//     setProfiles([...profiles, { ...newProfile, id: profiles.length + 1, likes: 0 }]);
//     setNewProfile({ name: "", favoriteFood: "", favoriteColor: "" });
//   };

//   const deleteProfile = (id) => {
//     setProfiles(profiles.filter(profile => profile.id !== id));
//   };

//   const likeProfile = (id) => {
//     setProfiles(profiles.map(profile => profile.id === id ? { ...profile, likes: profile.likes + 1 } : profile));
//   };

//   const handleEdit = (profile) => {
//     setEditProfile(profile);
//     setShowModal(true);
//   };

//   const saveEdit = () => {
//     setProfiles(profiles.map(profile => profile.id === editProfile.id ? editProfile : profile));
//     setShowModal(false);
//   };

//   const columnDefs = [
//     { headerName: "Name", field: "name", sortable: true, filter: true },
//     { headerName: "Favorite Food", field: "favoriteFood", sortable: true, filter: true },
//     { headerName: "Favorite Color", field: "favoriteColor", sortable: true, filter: true },
//     { headerName: "Likes", field: "likes", sortable: true },
//     {
//       headerName: "Actions",
//       cellRendererFramework: (params) => (
//         <>
//           <Button variant="success" size="sm" onClick={() => likeProfile(params.data.id)}>Like</Button>{' '}
//           <Button variant="warning" size="sm" onClick={() => handleEdit(params.data)}>Edit</Button>{' '}
//           <Button variant="danger" size="sm" onClick={() => deleteProfile(params.data.id)}>Delete</Button>
//         </>
//       )
//     }
//   ];

//   return (
//     <div className="container mt-4">
//       <h2>Student Connect</h2>
//       <Form className="mb-3">
//         <Form.Group>
//           <Form.Control type="text" placeholder="Name" value={newProfile.name} onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })} />
//           <Form.Control type="text" placeholder="Favorite Food" value={newProfile.favoriteFood} onChange={(e) => setNewProfile({ ...newProfile, favoriteFood: e.target.value })} className="mt-2" />
//           <Form.Control type="text" placeholder="Favorite Color" value={newProfile.favoriteColor} onChange={(e) => setNewProfile({ ...newProfile, favoriteColor: e.target.value })} className="mt-2" />
//         </Form.Group>
//         <Button variant="primary" className="mt-2" onClick={addProfile}>Add Profile</Button>
//       </Form>
//       <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
//         <AgGridReact rowData={profiles} columnDefs={columnDefs} pagination={true} modules={[ClientSideRowModelModule]} />
//       </div>
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Profile</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Control type="text" placeholder="Name" value={editProfile?.name || ""} onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })} />
//             <Form.Control type="text" placeholder="Favorite Food" value={editProfile?.favoriteFood || ""} onChange={(e) => setEditProfile({ ...editProfile, favoriteFood: e.target.value })} className="mt-2" />
//             <Form.Control type="text" placeholder="Favorite Color" value={editProfile?.favoriteColor || ""} onChange={(e) => setEditProfile({ ...editProfile, favoriteColor: e.target.value })} className="mt-2" />
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//           <Button variant="primary" onClick={saveEdit}>Save</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default StudentConnect;


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Button, Form, Modal } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const App = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Preetham", favoriteFood: "Chicken Biryani", favoriteColor: "Blue", likes: 0 },
    { id: 2, name: "Shiva Sai", favoriteFood: "South Indian food", favoriteColor: "Red", likes: 0 },
    { id: 3, name: "Pranadeep", favoriteFood: "Mutton ghosh", favoriteColor: "Purple", likes: 0 }
  ]);

  const [newProfile, setNewProfile] = useState({ name: "", favoriteFood: "", favoriteColor: "" });
  const [editProfile, setEditProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addProfile = () => {
    if (!newProfile.name || !newProfile.favoriteFood || !newProfile.favoriteColor) return;
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1, likes: 0 }]);
    setNewProfile({ name: "", favoriteFood: "", favoriteColor: "" });
  };

  const deleteProfile = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  const likeProfile = (id) => {
    setProfiles(prevProfiles => 
      prevProfiles.map(profile => 
        profile.id === id 
          ? { ...profile, likes: profile.likes + 1 } 
          : profile
      )
    );
  };

  const handleEdit = (profile) => {
    setEditProfile({ ...profile });
    setShowModal(true);
  };

  const saveEdit = () => {
    if (!editProfile) return;
    setProfiles(profiles.map(profile => 
      profile.id === editProfile.id ? { ...editProfile } : profile
    ));
    setShowModal(false);
  };

  const ActionButtons = (params) => (
    <div className="action-buttons-container">
      <Button variant="success" size="sm" onClick={() => likeProfile(params.data.id)}>Like</Button>
      <Button variant="warning" size="sm" onClick={() => handleEdit(params.data)}>Edit</Button>
      <Button variant="danger" size="sm" onClick={() => deleteProfile(params.data.id)}>Delete</Button>
    </div>
  );
  // const ActionButtons = (params) => (
  //   <div>
  //     <Button variant="success" size="sm" onClick={() => likeProfile(params.data.id)}>Like</Button>{' '}
  //     <Button variant="warning" size="sm" onClick={() => handleEdit(params.data)}>Edit</Button>{' '}
  //     <Button variant="danger" size="sm" onClick={() => deleteProfile(params.data.id)}>Delete</Button>
  //   </div>
  // );

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

  return (
    <div className="container mt-4">
      <h2>Student Connect</h2>
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