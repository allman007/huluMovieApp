import React from "react";
import request from "../request";
import "./Navbar.css";

const Navbar = ({ setSelectedOption }) => {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(request.fetchTreanding)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOption(request.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setSelectedOption(request.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOption(request.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchTV)}>War</h2>
    </div>
  );
};

export default Navbar;
