import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';  // The Homepage component
import MovieList from './components/MovieList';  // The Movie List component
// src/index.js or src/App.js
import './styles.css'; // Import the CSS file


function App() {
  return (
    <Router>
      <div className="App">
        {/* Set up routing here */}
        <Routes>
          {/* HomePage route */}
          <Route path="/" element={<HomePage />} />
          {/* Movie list page for each genre */}
          <Route path="/movies/:genre" element={<MovieList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

