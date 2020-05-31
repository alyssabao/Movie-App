import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  if (props.movieList === undefined) {
    return <div>Loading</div>;
  }
  console.log(props.movieList)
  return (
    <div className="movieSpace">
      {props.movieList.map((item) => {
        return <MovieCard movie={item} genresFromMovieList={props.genresFromApp}/>;
      })}
    </div>
  );
}