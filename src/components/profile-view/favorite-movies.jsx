import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

function FavMovieView({ favoriteMovieList, movies }) {

  return (
      <div className="favorite-movies">
             <h4>Favorite Movies</h4>
              {favoriteMovieList.length > 0 && 
              movies.map((movie) => {
                if(movie._id === favoriteMovieList.find((favMovie)=> favMovie === movie._id)){
                return (
                  <div key={movie._id}>
                    <Link to={`/movies/${movie._id}`}>
                      <h5>{movie.Title}</h5>
                    </Link>
                      <Button variant="danger" value={movie._id} onClick={(e)=> {
                      e.preventDefault();
                     removeFavoriteMovie(movie)}}>
                      Remove from List
                      </Button>
                  </div>
                );
              } 
            })}
          </div> 
  )

}
export default FavMovieView
