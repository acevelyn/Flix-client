// import modules
import React, { useState } from 'react';
import axios from 'axios';

// import files
import FavMovieView from "./favorite-movies"
import UpdateUser from "./update-user"
import UserInfo from "./user-info"

const NewProfileView = (props) => {
  // API data 

  // GET USER DATA 

  // DELETE ACCOUNT

  // UPDDATE ACCOUNT

  // REMOVE A FAVORITE MOVIE

  return (
    <div className="profile-view">
      <UserInfo />
      <UpdateUser />
      <FavMovieView />
    </div>
  )
}

export default NewProfileView