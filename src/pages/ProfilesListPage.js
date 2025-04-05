import React from "react";
import { useNavigate } from "react-router-dom";
import ProfilesGrid from "../components/ProfilesGrid";
import { useProfiles } from "../contexts/ProfilesContext";
import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import EditProfileModal from "../components/EditProfileModal";

const ProfilesListPage = () => {
  const navigate = useNavigate();
  const { 
    profiles, 
    likeProfile, 
    deleteProfile, 
    handleEdit,
    showModal,
    setShowModal,
    editProfile,
    setEditProfile,
    saveEdit
  } = useProfiles();
  const { darkMode } = useTheme();

  return (
    <div className={`container mt-4 ${darkMode ? 'dark-mode' : ''}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mt-2">My Class Mates</h2>
        <div className="d-flex">
          <button 
            className="btn btn-primary me-2" 
            onClick={() => navigate("/add")}
          >
            Add New Classmate
          </button>
          <ThemeToggle />
        </div>
      </div>

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

export default ProfilesListPage;