// FUNCTION COMPONENT

// Modules
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

// Stylings
import './profile-view.scss';
import Button from 'react-bootstrap/Button';
import {Row, Col, Container, Form, Figure } from 'react-bootstrap';


export function FaveMovies({ favoriteMovieList }) {
  const removeFav = (id) => {
    let token = localStorage.getItem('token');
    let username = localStorage.getUser('user');
    e.preventDefault();
    axios.delete(`https://evflixapp.herokuapp.com/users/${username}/movies/${id}`,
    { headers: Authorization: `Bearer ${token}`},
    )
  }

  return (
      <>
        <Row className="favorite-movies">
          <Col xs={12}>
            <h4>Favorite Movies</h4>
          </Col>
        </Row> 

        <Row>
          {favoriteMovieList.length > 0 && 
              movies.map((movie) => {
                if(movie._id === favoriteMovieList.find((favMovie)=> favMovie === movie._id)){
                return (
                  <Col xs={12} md={6} lg={3} key={movie._id} className="fav-movie">
                      <Figure>
                        <Link to={`/movies/${movie._id}`}>
                          <Figure.Image
                            src={movie.ImagePath}
                            alt={movie.Title}
                          />
                          <Figure.Caption>
                            {movie.Title}
                          </Figure.Caption>
                          </Link>
                      </Figure>
                      <Button variant="secondary" value={movie._id} onClick={()=> removeFavoriteMovie(movie._id)
                     }>
                      Remove
                      </Button>
                  </Col>
                );
              } 
            })}
        </Row> 
      </>
          )
        }

