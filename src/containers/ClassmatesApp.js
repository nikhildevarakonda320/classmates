import React from "react";

// Custom hooks
import { useTheme } from "../contexts/ThemeContext";
import { useProfiles } from "../contexts/ProfilesContext";

// Components
import AddProfileForm from "../components/AddProfileForm";
import EditProfileModal from "../components/EditProfileModal";
import ProfilesGrid from "../components/ProfilesGrid";
import ThemeToggle from "../components/ThemeToggle";

const ClassmatesApp = () => {
  // Get theme context
  const { darkMode, toggleDarkMode } = useTheme();
  
  // Get profiles context
  const { 
    profiles, 
    newProfile, 
    setNewProfile, 
    editProfile, 
    setEditProfile,
    showModal, 
    setShowModal,
    addProfile, 
    deleteProfile, 
    likeProfile, 
    handleEdit, 
    saveEdit 
  } = useProfiles();

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mt-2">My Class Mates</h2>
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Form for adding new profiles */}
      <AddProfileForm 
        newProfile={newProfile} 
        setNewProfile={setNewProfile} 
        addProfile={addProfile} 
      />

      {/* Grid for displaying profiles */}
      <ProfilesGrid 
        profiles={profiles}
        likeProfile={likeProfile}
        handleEdit={handleEdit}
        deleteProfile={deleteProfile}
      />

      {/* Edit Profile Modal */}
      <EditProfileModal 
        showModal={showModal}
        setShowModal={setShowModal}
        editProfile={editProfile}
        setEditProfile={setEditProfile}
        saveEdit={saveEdit}
      />
    </div>
  );
};

export default ClassmatesApp;