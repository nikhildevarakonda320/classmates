import React from "react";

const AddProfileForm = ({ newProfile, setNewProfile, addProfile }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3 mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={newProfile.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Favorite Food"
            name="favoriteFood"
            value={newProfile.favoriteFood}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Favorite Color"
            name="favoriteColor"
            value={newProfile.favoriteColor}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Classmate
      </button>
    </form>
  );
};

export default AddProfileForm;