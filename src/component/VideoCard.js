import React, { forwardRef } from "react";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
import "./VideoCard.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <TextTruncate
        className="text"
        line={2}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.orignal_name}</h2>
      <p className="videoCard__stats">
        {" "}
        {movie.media_type && `${movie.media_type} `} <br />
        {movie.release_date || movie.first_air_date} {""}
        <ThumbUpSharp /> {""}
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
