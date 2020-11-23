import React, { useEffect, useState } from "react";
import VideoCard from "../component/VideoCard";
import requests from "../request";
import axios from "../axios";
import FlipMove from "react-flip-move";
import "./Result.css";

function Result({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return requests;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Result;
