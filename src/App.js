import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Button, Form, Modal } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Changed this line

const App = () => {

  ///Added Static Data for the user to view the data using ag-grid and useState hook
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Preetham", favoriteFood: "Chicken Biryani", favoriteColor: "Blue", likes: 0 },
    { id: 2, name: "Shiva Sai", favoriteFood: "South Indian food", favoriteColor: "Red", likes: 0 },
    { id: 3, name: "Pranadeep", favoriteFood: "Mutton ghosh", favoriteColor: "Purple", likes: 0 },
    { id: 4, name: "Emma Wilson", favoriteFood: "Pizza", favoriteColor: "Green", likes: 0 },
    { id: 5, name: "Liam Chen", favoriteFood: "Sushi", favoriteColor: "Black", likes: 0 },
    { id: 6, name: "Sophia Rodriguez", favoriteFood: "Tacos", favoriteColor: "Pink", likes: 0 },
    { id: 7, name: "Noah Kim", favoriteFood: "Korean BBQ", favoriteColor: "Navy", likes: 0 },
    { id: 8, name: "Ava Patel", favoriteFood: "Butter Chicken", favoriteColor: "Turquoise", likes: 0 },
    { id: 9, name: "Jackson Brown", favoriteFood: "Hamburger", favoriteColor: "Orange", likes: 0 },
    { id: 10, name: "Isabella Martinez", favoriteFood: "Paella", favoriteColor: "Yellow", likes: 0 },
    { id: 11, name: "Lucas Thompson", favoriteFood: "Pasta", favoriteColor: "Grey", likes: 0 },
    { id: 12, name: "Mia Johnson", favoriteFood: "Fish and Chips", favoriteColor: "Violet", likes: 0 },
    { id: 13, name: "Aiden Lee", favoriteFood: "Dim Sum", favoriteColor: "Maroon", likes: 0 },
    { id: 14, name: "Charlotte Davis", favoriteFood: "Caesar Salad", favoriteColor: "Coral", likes: 0 },
    { id: 15, name: "Ethan Singh", favoriteFood: "Naan", favoriteColor: "Indigo", likes: 0 },
    { id: 16, name: "Amelia White", favoriteFood: "Mac and Cheese", favoriteColor: "Teal", likes: 0 },
    { id: 17, name: "Oliver Wang", favoriteFood: "Hot Pot", favoriteColor: "Brown", likes: 0 },
    { id: 18, name: "Harper Garcia", favoriteFood: "Enchiladas", favoriteColor: "Gold", likes: 0 },
    { id: 19, name: "Sebastian Kumar", favoriteFood: "Dosa", favoriteColor: "Silver", likes: 0 },
    { id: 20, name: "Aria Ahmed", favoriteFood: "Shawarma", favoriteColor: "Bronze", likes: 0 },
    { id: 21, name: "Alexander Nguyen", favoriteFood: "Pho", favoriteColor: "Crimson", likes: 0 },
    { id: 22, name: "Evelyn Taylor", favoriteFood: "Shepherd's Pie", favoriteColor: "Lavender", likes: 0 },
    { id: 23, name: "Daniel Santos", favoriteFood: "Feijoada", favoriteColor: "Cyan", likes: 0 },
    { id: 24, name: "Victoria Chang", favoriteFood: "Ramen", favoriteColor: "Magenta", likes: 0 },
    { id: 25, name: "Henry Wilson", favoriteFood: "Steak", favoriteColor: "Burgundy", likes: 0 },
    { id: 26, name: "Luna Park", favoriteFood: "Bibimbap", favoriteColor: "Olive", likes: 0 },
    { id: 27, name: "Jack Anderson", favoriteFood: "Chicken Wings", favoriteColor: "Peach", likes: 0 },
    { id: 28, name: "Scarlett Liu", favoriteFood: "Dumplings", favoriteColor: "Ruby", likes: 0 },
    { id: 29, name: "Owen Murphy", favoriteFood: "Irish Stew", favoriteColor: "Emerald", likes: 0 },
    { id: 30, name: "Chloe Kim", favoriteFood: "Kimchi", favoriteColor: "Sapphire", likes: 0 },
    { id: 31, name: "Mason Lopez", favoriteFood: "Tamales", favoriteColor: "Pearl", likes: 0 },
    { id: 32, name: "Layla Shah", favoriteFood: "Biryani", favoriteColor: "Aqua", likes: 0 },
    { id: 33, name: "Elijah Brown", favoriteFood: "BBQ Ribs", favoriteColor: "Slate", likes: 0 },
    { id: 34, name: "Zoe Chen", favoriteFood: "Peking Duck", favoriteColor: "Rose", likes: 0 },
    { id: 35, name: "Gabriel Silva", favoriteFood: "Churrasco", favoriteColor: "Forest Green", likes: 0 },
    { id: 36, name: "Lily Tanaka", favoriteFood: "Tempura", favoriteColor: "Sky Blue", likes: 0 },
    { id: 37, name: "David Cohen", favoriteFood: "Falafel", favoriteColor: "Charcoal", likes: 0 },
    { id: 38, name: "Hannah Kim", favoriteFood: "Bulgogi", favoriteColor: "Mint", likes: 0 },
    { id: 39, name: "Joseph Gupta", favoriteFood: "Tandoori Chicken", favoriteColor: "Rust", likes: 0 },
    { id: 40, name: "Audrey Wu", favoriteFood: "Spring Rolls", favoriteColor: "Ivory", likes: 0 },
    { id: 41, name: "Christopher Lee", favoriteFood: "Pad Thai", favoriteColor: "Cherry", likes: 0 },
    { id: 42, name: "Bella Martinez", favoriteFood: "Quesadillas", favoriteColor: "Mustard", likes: 0 },
    { id: 43, name: "Andrew Zhang", favoriteFood: "Mapo Tofu", favoriteColor: "Tan", likes: 0 },
    { id: 44, name: "Grace Wilson", favoriteFood: "Lobster Roll", favoriteColor: "Plum", likes: 0 },
    { id: 45, name: "Ryan Patel", favoriteFood: "Samosas", favoriteColor: "Coffee", likes: 0 },
    { id: 46, name: "Nora Johnson", favoriteFood: "Clam Chowder", favoriteColor: "Mauve", likes: 0 },
    { id: 47, name: "William Cho", favoriteFood: "Japchae", favoriteColor: "Beige", likes: 0 },
    { id: 48, name: "Sophie Martin", favoriteFood: "Coq au Vin", favoriteColor: "Wine", likes: 0 },
    { id: 49, name: "Benjamin Lee", favoriteFood: "Tom Yum", favoriteColor: "Copper", likes: 0 },
    { id: 50, name: "Elena Rodriguez", favoriteFood: "Empanadas", favoriteColor: "Azure", likes: 0 }
  ]);

  ///Added useState hook for the user to add the data and edit the data
  const [newProfile, setNewProfile] = useState({ name: "", favoriteFood: "", favoriteColor: "" });
  const [editProfile, setEditProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  ///Added the functionality for the user to toggle the theme
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Replace the existing AG Grid dark mode useEffect with this one
  useEffect(() => {
    // Add a small delay to ensure the grid is fully rendered
    const timeoutId = setTimeout(() => {
      const applyDarkStyles = () => {
        // Apply styles to all grid elements
        document.querySelectorAll('.ag-theme-material .ag-header-cell').forEach(el => {
          el.style.backgroundColor = darkMode ? '#333' : '';
          el.style.color = darkMode ? '#fff' : '';
        });
        
        document.querySelectorAll('.ag-theme-material .ag-cell').forEach(el => {
          el.style.backgroundColor = darkMode ? '#444' : '';
          el.style.color = darkMode ? '#fff' : '';
        });
        
        document.querySelectorAll('.ag-theme-material .ag-row').forEach(el => {
          el.style.backgroundColor = darkMode ? '#444' : '';
        });
        
        document.querySelectorAll('.ag-theme-material .ag-row-odd').forEach(el => {
          el.style.backgroundColor = darkMode ? '#3a3a3a' : '';
        });
        
        document.querySelectorAll('.ag-theme-material .ag-row-even').forEach(el => {
          el.style.backgroundColor = darkMode ? '#444' : '';
        });
        
        document.querySelectorAll('.ag-theme-material .ag-paging-panel').forEach(el => {
          el.style.backgroundColor = darkMode ? '#333' : '';
          el.style.color = darkMode ? '#fff' : '';
        });
        
        document.querySelectorAll('.ag-theme-material .ag-paging-button').forEach(el => {
          el.style.color = darkMode ? '#fff' : '';
        });
      };
      
      // Apply styles immediately
      applyDarkStyles();
      
      // Set up a mutation observer to handle dynamically added elements
      const observer = new MutationObserver(applyDarkStyles);
      const gridElement = document.querySelector('.ag-theme-material');
      
      if (gridElement) {
        observer.observe(gridElement, { 
          childList: true,
          subtree: true 
        });
      }
      
      return () => {
        observer.disconnect();
      };
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [darkMode]);


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
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mt-2">My Class Mates</h2>
        <Button 
          variant={darkMode ? "light" : "dark"} 
          onClick={toggleDarkMode}
          className="mt-2"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

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
          className="mt-3" 
          onClick={addProfile}
          disabled={!newProfile.name || !newProfile.favoriteFood || !newProfile.favoriteColor}
        >
          Add Profile
        </Button>
      </Form>

      {/* Grid for the user to view the user details */}
      <div 
        className={`ag-theme-material`} 
        style={{ 
          height: '500px', // Fixed height
          width: "100%",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
          marginBottom: "20px",
          fontSize: "14px"
        }}
      >
        <AgGridReact 
          rowData={profiles} 
          columnDefs={columnDefs} 
          pagination={true} 
          modules={[ClientSideRowModelModule]}
          paginationPageSize={10}
          paginationAutoPageSize={false}
          suppressPaginationPanel={false}
          animateRows={true}
          rowSelection="multiple"
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            resizable: true,
            sortable: true,
            filter: true,
          }}
          domLayout="normal"
          rowHeight={48}
          headerHeight={48}
          suppressCellFocus={true}
          suppressRowHoverHighlight={false}
          enableCellTextSelection={true}
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