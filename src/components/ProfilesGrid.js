import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ProfilesGrid = ({ profiles, likeProfile, handleEdit, deleteProfile }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className="mt-4 container-fluid px-0">
      <div className="table-responsive">
        <table className={`table table-striped ${darkMode ? 'table-dark' : ''} w-100`}>
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "30%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>Name</th>
              <th>Favorite Food</th>
              <th>Favorite Color</th>
              <th>Likes</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.name}</td>
                <td>{profile.favoriteFood}</td>
                <td>{profile.favoriteColor}</td>
                <td>{profile.likes}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-success btn-sm mx-1"
                      onClick={() => likeProfile(profile.id)}
                    >
                      Like
                    </button>
                    <button
                      className="btn btn-warning btn-sm mx-1"
                      onClick={() => handleEdit(profile)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm mx-1"
                      onClick={() => deleteProfile(profile.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilesGrid;