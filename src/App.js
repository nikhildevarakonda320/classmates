import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

// Pages
import HomePage from "./pages/HomePage";
import AddProfilePage from "./pages/AddProfilePage";

// Contexts
import { ThemeProvider } from "./contexts/ThemeContext";
import { ProfilesProvider } from "./contexts/ProfilesContext";

const App = () => {
  return (
    <ThemeProvider>
      <ProfilesProvider>
        <BrowserRouter basename="/classmates">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ProfilesProvider>
    </ThemeProvider>
  );
};

export default App;