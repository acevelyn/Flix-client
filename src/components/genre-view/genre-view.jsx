import React from 'react';

export class GenreView extends React.Component {


  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="genre-view">
        <div className="genre-name">
          <span className="label">Genre Type: </span>
          <span className="value">{movie.Genre.Name}</span>
        </div>
        <div className="genre-description">
          <span className="label">Genre Description: </span>
          <span className="value">{movie.Genre.Description}</span>
        </div>

        <button onClick={() => { onBackClick(null); }}>Back</button>

      </div>
    );
  }
}