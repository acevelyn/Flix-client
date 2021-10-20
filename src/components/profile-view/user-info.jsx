import React from 'react';

function UserInfo({ name, email, birthday }) {
  return (
    <>
    <div className="user-info">
      <h2>Profile Info</h2>
        <div className="username-info">
          <span className="label">User: </span>
          <span className="value">{name}</span>
        </div>
        <div className="email-info">
          <span className="label">Email: </span>
          <span className="value">{email}</span>
        </div>
        <div className="birthday-info">
          <span className="label">Birthday: </span>
          <span className="value">{birthday}</span>
        </div>
    </div>
    </>
  )
}
export default UserInfo




// CLASS COMPONENT STYLE
// export class UserInfo extends React.Component {
 
//   render() {
//     const { user } = this.props;
//     return (
//       <div className="user-info">
//           <h1> Profile Info</h1>
//           <div className="username-info">
//              <span className="label">Username: </span>
//              <span className="value">{user.Username}</span>
//           </div>
//            <div className="email-info">
//              <span className="label">Email: </span>
//              <span className="value">{user.Email}</span>
//            </div>
//            <div className="birthday-info">
//              <span className="label">Birthday: </span>
//              <span className="value">{user.Birthday}</span>
//           </div>
//       </div>
//     ) 
//   }
// }


 