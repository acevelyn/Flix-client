import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


export class ProfileView extends React.Component {
constructor(){
  super();

this.state = {
  Username: null,
  Password: null,
  Email: null,
  Birthday: null,
  FavoriteMovies: null,
  validated: null,
};
}
  componentDidMount(){
    const accessToken = localStorage.getItem('token');
    if (accessToken !== null){
      this.getUser(accessToken);
    }
  }

  getUser(token) {
    const username = localStorage.getItem('user');
    axios.get(`https://evflixapp.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}`},
    })
    .then((response)=>{
      this.setState({
        Username: response.data.Username,
        Password: response.data.Password,
        Email: response.data.Email,
        Birthday: response.data.Birthday.
        FavoriteMovies: response.data.FavoriteMovies
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }


}

 render(){
   const { user } = this.props;
    return (
      <div className="profile-view">
        <span>{user.Username}</span>
      </div>
    )
 }
}