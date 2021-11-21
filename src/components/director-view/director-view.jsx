import React from 'react';
import PropTypes from 'prop-types';

//React-Bootstrap Styling
import './director-view.scss';
import Button from 'react-bootstrap/Button';

export class DirectorView extends React.Component {

  render() {
    const { director, onBackClick } = this.props;

    return (
      <div className="director-view">
        <div className="director-name">
          <span className="label">Name: </span>
          <span className="value">{director.Name}</span>
        </div>
        <div className="director-bio">
          <span className="label">Bio: </span>
          <span className="value">{director.Bio}</span>
        </div>
        <div className="director-birthyear">
          <span className="label">Birthdate: </span>
          <span className="value">{director.Birth}</span>
        </div>
        <div className="director-deathyear">
          <span className="label">Death: </span>
          <span className="value">{director.Death}</span>
        </div>
        <Button variant="secondary" size="sm" onClick={() => { onBackClick(null); }}>Back</Button>

      </div>
    );
  }
}

DirectorView.propTypes = {
  movie: PropTypes.shape({
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.number.isRequired
    }).isRequired,
  })
};
