// src/components/GenreList.js
import React from 'react';
import { Link } from 'react-router-dom';

const genres = ['Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi', 'Romance']; // Static genres

const GenreList = () => {
  return (
    <div className="container my-5">
      <h2>Explore Genres</h2>
      <div className="row">
        {genres.map((genre) => (
          <div key={genre} className="col-md-2 mb-4">
            <div className="card">
              <Link to={`/movies/${genre}`}>
                <div className="card-body text-center">
                  <h5 className="card-title">{genre}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
