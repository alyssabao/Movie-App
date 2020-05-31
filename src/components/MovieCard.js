import React from "react";
import moment from 'moment'
import 'C:/Users/inxjv/Desktop/Mojave/movieapp/src/App.css'

export default function MovieCard(props) {
    let movie = props.movie;
    let genres = props.genresFromMovieList;
    return (
        <div className="maincontainer movieBetween">
            <div className="thecard">
                <div className="front">
                    <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}></img>
                </div>
                <div className="back">
                    <h1 className="boldFont">{movie.title}</h1>
                    <div className="borderLine">
                        {moment(movie.release_date).format('MMMM Do, YYYY')}
                    </div>
                    <div className="borderLine">
                        ★ {movie.vote_average}
                    </div>
                    <div className="borderLine">
                        {movie.genre_ids.map(id => {return(
                            <span className="genreSpace">{genres.find(genre => id === genre.id).name}</span>
                        )})}
                    </div>
                    <p className="borderLine">{movie.overview}</p>
                </div>
            </div>
        </div >
    );
}