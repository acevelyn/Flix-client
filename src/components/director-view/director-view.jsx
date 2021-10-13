import React from 'react';

export class DirectorView extends React.Component {


  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="director-view">
        <div className="director-name">
          <span className="label">Director Name: </span>
          <span className="value">{movie.Director.Name}</span>
        </div>
        <div className="director-bio">
          <span className="label">Director Bio: </span>
          <span className="value">{movie.Director.Bio}</span>
        </div>
        <div className="director-birthyear">
          <span className="label">Director Birth year: </span>
          <span className="value">{movie.Director.Birth}</span>
        </div>
        <div className="director-deathyear">
          <span className="label">Director Death year: </span>
          <span className="value">{movie.Director.Death}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>

      </div>
    );
  }
}