import React from 'react';
import axios from 'axios';


// export class ProfileView extends React.Component {
//   const { user } = this.props;

//     render(){
//       return (

//       )
//     }
// }




// import {Button} from 'react-bootstrap/Button';
// import {Form} from 'react-bootstrap/Form';
// export class ProfileView extends React.Component {
//   const { setUsername, setPassword, setEmail, setBirthday} = useState('');
//   constructor(){
//     super()
//     this.state = {
//       Username: null,
//       Password: null,
//       Email: null,
//       Birthday: null,
//       validated: null
//     }
//   }

//   componentDidMount(){
//     let accessToken = localStorage.getItem('token');
//     if (accessToken !== null) {
//       this.getUsers(accessToken);
//     }
//   }

//   // Get User Info
//   getUsers(token) {
//     const username = localStorage.getItem('user');
//     axios.get(`https://evflixapp.herokuapp.com/users/${username}`, {
//       headers: {Authorization: `Bearer ${token}`}
//     })
//     .then((response)=> {
//       this.setState({
//         Username: response.data.Username,
//         Password: response.data.Password,
//         Email: response.data.Email,
//         Birthday: response.data.FavoriteMovies
//       });
//     })
//     .catch((error)=> {
//       console.log(error);
//     })
//   }

//   // Update User Info
//   handleUpdate(newUsername, newPassword, newEmail, newBirthday) {
//     const token = localStorage.getItem('token');
//     const username = localStorage.getItem('user');
//     axios.put(`https://evflixapp.herokuapp.com/users/${username}`, {
//       headers: {Authorization: `Bearer ${token}`}, {
//         Username: username,
//         Password: password,
//         Email: email,
//         Birthday: birthday,
//         // FavoriteMovies: []
//       }
//     })
//     .then((response)=> {
//       this.setState({
//         Username: response.data.Username;
//         Password: response.data.Password;
//         Email: response.data.Email;
//         Birthday: response.data.Birthday;
//       })
//       alert('Account has been updated')
//     })
//     .catch((error)=> {
//       console.log(error)
//     });
//   }

//   // Deregister User
//   handleDelete(user){
//     const token = localStorage.getItem('token');
//     const username = localStorage.getItem('user');
//     axios.delete(`http://exflixapp.herokuapp.com/users/${username}`,
//     header: { Authorization: `Bearer ${token}`})
//     .then((user)=> {
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//         this.setState({
//         user: null
//         })
//         alert('Account has been deleted')
//     })
//   }

//   // Remove A Favorite Movie
//   removeFavoriteMovie() {
//     const token = localStorage.getItem('token');
//     const username = localStorage.getItem('user');

//   axios.delete(`https://evflixapp.com/users/${username}/movies/${movie._id}`,
//   { headers: { Authorization: `Bearer ${token}` }
//   })
//   .then(() =>{
//     console.log('Movie was removed')
//   })
//   .catch((error)=> {
//     console.log(error);
//   })
//   }


//   render(){
//      const { user, movies } = this.props;
//       return (
//         <>
//         <div className="profile-view">
//           <div className="username-info">
//              <span className="label">Username:</span>
//              <span className="value">{user.Username}</span>
//           </div>
//            <div className="email-info">
//              <span className="label">Email:</span>
//              <span className="value">{user.Email}</span>
//            </div>
//            <div className="birthday-info">
//              <span className="label">Birthday:</span>
//            <span className="value">{user.Birthday}</span>
//           </div>
//            <div className="favorite-movies">
//              <span className="label">Favorite Movies:</span>
//              <span className="value">{user.FavoriteMovies}</span>
//            </div>
//         </div>
//       <Form>

//       <h1 className="update-title">Update Account Info</h1>
//         <Form.Group controlId="formUsername">
//             <Form.Label>Username:</Form.Label>
//             <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
//         </Form.Group>

//       <Form.Group controlId="formPassword">
//         <Form.Label>Password:</Form.Label>
//         <Form.Control type="text" onChange={e => setPassword(e.target.value)} />
//       </Form.Group>

//       <Form.Group controlId="formEmail">
//         <Form.Label>Email:</Form.Label>
//         <Form.Control type="text" onChange={e => setEmail(e.target.value)} />
//       </Form.Group>

//       <Form.Group controlId="formBirthdate">
//         <Form.Label>Birthday:</Form.Label>
//         <Form.Control type="text" onChange={e => setBirthday(e.target.value)} />
//       </Form.Group>

//       <Button variant="primary" size="md" type="submit" onClick={handleUpdate}>
//         Submit
//       </Button>
//     </Form>
//      </>

//     )
//   }

// } // end of class ProfileView



