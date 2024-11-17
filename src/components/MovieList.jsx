// src/components/MovieList.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const MovieList = () => {
  const { genre } = useParams(); // Get genre from URL
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}&s=${genre}&type=movie`);
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [genre]);

  useEffect(() => {
    // Filter movies based on the search query
    if (searchQuery) {
      setFilteredMovies(
        movies.filter((movie) =>
          movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredMovies(movies);
    }
  }, [searchQuery, movies]);

  return (
   <>
    <div className="container my-5">
      <h2>{genre} Movies</h2>
      
      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <div key={index} className="col-md-2 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
                  alt={movie.Title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div> 
    </div>
          <Footer />
  </> 
  );
};

export default MovieList;
