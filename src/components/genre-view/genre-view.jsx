import React from 'react';

//React-Bootstrap Styling
import Button from 'react-bootstrap/Button';

export class GenreView extends React.Component {


  render() {
    const { genre, onBackClick } = this.props;

    return (
      <div className="genre-view">
        <div className="genre-name">
          <span className="label">Genre Type: </span>
          <span className="value">{genre.Name}</span>
        </div>
        <div className="genre-description">
          <span className="label">Genre Description: </span>
          <span className="value">{genre.Description}</span>
        </div>
        
        <Button variant="secondary" size="sm" type="submit"onClick={() => { onBackClick(null); }}>Back</Button>

      </div>
    );
  }
}
