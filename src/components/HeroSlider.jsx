// src/components/HeroSlider.js
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const HeroSlider = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY; // Ensure your environment variable is set
  const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}&s=marvel&type=movie`);
        setMovies(response.data.Search || []); // Use a default value to avoid null errors
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item key={movie.imdbID}>
          <img
            style={{ width: '100%', height: '70vh', objectFit: 'cover' }}
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/1200x500'}
            alt={movie.Title}
          />
          <Carousel.Caption>
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSlider;
