import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// Here I have created an array of objects which consists of the user details which consists of his name , fovourite food, Favourite color

const people = [
  { name: "Preetham", favoriteFood: "Chicken Biryani", favoriteColor: "Blue" },
  { name: "Shiva Sai", favoriteFood: "South Indian food", favoriteColor: "Red" },
  { name: "Pranadeep", favoriteFood: "Mutton ghosh", favoriteColor: "Pink" },
  { name: "Greeshma", favoriteFood: "Fish", favoriteColor: "Green" }
];

// Here i haev created an prop named as person which will be retreving the data present in the people array of objects

//  Also i have created and useState hookm which will store the count of the likes clicked when the user click on the like button

// I have also created an small animation when the user clicks on the like button he will see an Love symbol animation

const Card = ({ person }) => {
  const [likes, setLikes] = useState(0);
  const [showLove, setShowLove] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
    setShowLove(true);
    setTimeout(() => setShowLove(false), 1000);
  };

  return (
    <div className="col-12 mb-4">

      {/* Here I have created an Card to Dispaly the classmates details */}
      <div className="card text-center custom-card">
        <div className="card-body">
          <h3 className="card-title text-primary">{person.name}</h3>
          <p className="card-text">Favorite Color: {person.favoriteColor}</p>
          <p className="card-text">Favorite Food: {person.favoriteFood}</p>
          
          {/* Button for the Like */}
          <button className="btn btn-success" onClick={handleLike}>
            Like {likes}
          </button>
          {/* Small Animation */}
          {showLove && <div className="love-animation">❤️</div>}
        </div>
      </div>
    </div>
  );
};

// Create an container called my classmates
const MyClassmates = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 align-items-left">My Classmates</h1>

      {/* Here i have created an map function to iterete through the people object to display their details */}
      <div className="row flex-column align-items-center">
        {people.map((person, index) => (
          <Card key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default MyClassmates;
