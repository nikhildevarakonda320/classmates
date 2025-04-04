import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// Custom hooks
import { useDarkMode } from "./hooks/useDarkMode";

// Components
import AddProfileForm from "./components/AddProfileForm";
import EditProfileModal from "./components/EditProfileModal";
import ProfilesGrid from "./components/ProfilesGrid";
import ThemeToggle from "./components/ThemeToggle";

// Data
import { initialProfiles } from "./services/profilesData";

const App = () => {
  // State management
  const [profiles, setProfiles] = useState(initialProfiles);
  const [newProfile, setNewProfile] = useState({ name: "", favoriteFood: "", favoriteColor: "" });
  const [editProfile, setEditProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode styles
  useDarkMode(darkMode);

  // Theme management
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // CRUD operations
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

  // Render
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

export default App;