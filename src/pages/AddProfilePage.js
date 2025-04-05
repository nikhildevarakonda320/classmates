import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Custom hooks
import { useTheme } from "../contexts/ThemeContext";
import { useProfiles } from "../contexts/ProfilesContext";

// Components
import AddProfileForm from "../components/AddProfileForm";
import ThemeToggle from "../components/ThemeToggle";

const AddProfilePage = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();
  const { newProfile, setNewProfile, addProfile } = useProfiles();

  const handleAddProfile = () => {
    const success = addProfile();
    if (success) {
      navigate("/");
    }
  };

  return (
    <div className={`container mt-4 ${darkMode ? 'dark-mode' : ''}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mt-2">Add New Classmate</h2>
        <div className="d-flex">
          <button 
            className="btn btn-secondary me-2" 
            onClick={() => navigate("/")}
          >
            Back to List
          </button>
          <ThemeToggle />
        </div>
      </div>

      {/* Form for adding new profiles */}
      <div className="card">
        <div className="card-body">
          <AddProfileForm 
            newProfile={newProfile} 
            setNewProfile={setNewProfile} 
            addProfile={handleAddProfile} 
          />
        </div>
      </div>
    </div>
  );
};

export default AddProfilePage;