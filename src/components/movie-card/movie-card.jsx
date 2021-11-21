import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './movie-card.scss'

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Container className="movieCard-view">
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={movie.ImagePath} />
              <Card.Body className="card-view">
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Description}</Card.Text>
                <Link to={`/movies/${movie._id}`}>
                  <Button variant="outline-primary">Open</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieCard.propTypees = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string,
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string
      })

    })
  }).isRequired
};