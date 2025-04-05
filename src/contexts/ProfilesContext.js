import React, { createContext, useState, useContext } from "react";
import { initialProfiles } from "../services/profilesData";

// Create the context
const ProfilesContext = createContext();

// Custom hook to use the profiles context
export const useProfiles = () => {
  const context = useContext(ProfilesContext);
  if (context === undefined) {
    throw new Error("useProfiles must be used within a ProfilesProvider");
  }
  return context;
};

// Profiles provider component
export const ProfilesProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [newProfile, setNewProfile] = useState({ name: "", favoriteFood: "", favoriteColor: "" });
  const [editProfile, setEditProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // CRUD operations
  const addProfile = () => {
    if (!newProfile.name || !newProfile.favoriteFood || !newProfile.favoriteColor) return;
    
    setProfiles([...profiles, { 
      ...newProfile, 
      id: profiles.length > 0 ? Math.max(...profiles.map(p => p.id)) + 1 : 1, 
      likes: 0 
    }]);
    
    setNewProfile({ name: "", favoriteFood: "", favoriteColor: "" });
    return true;
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

  // The value that will be provided to consumers of this context
  const value = {
    profiles,
    setProfiles,
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
  };

  return (
    <ProfilesContext.Provider value={value}>
      {children}
    </ProfilesContext.Provider>
  );
};