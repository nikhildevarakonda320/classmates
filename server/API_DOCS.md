# Classmates API Documentation

## Base URL
`http://localhost:5000/api`

## Endpoints

### Get All Profiles
- **URL**: `/profiles`
- **Method**: `GET`
- **Success Response**: 
  - **Code**: 200
  - **Content**: Array of profile objects
  ```json
  [
    {
      "id": 1,
      "name": "Preetham",
      "favoriteFood": "Chicken Biryani",
      "favoriteColor": "Blue",
      "likes": 0
    },
    ...
  ]