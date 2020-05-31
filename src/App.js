import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList.js'
import MovieCarousel from './components/MovieCarousel.js'
import LoadMore from './components/LoadMore.js'
import Header from './components/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const apiKey = process.env.REACT_APP_APIKEY;
let numMovies = 1;

function App() {
  let [movieList, setMovieList] = useState(null)
  let [genre, setGenre] = useState(null)

  const getGenre = async () => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    let data = await fetch(url)
    let result = await data.json();
    getLatestMovie()
    setGenre(result.genres)
    console.log("genre data looks like", result)
  }

  const getLatestMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${numMovies}`
    let data = await fetch(url)
    let result = await data.json();
    setMovieList(result.results)
    console.log("movies", result.results)
  }

  const getTopRatedMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${numMovies}`
    let data = await fetch(url)
    let result = await data.json();
    setMovieList(result.results)
  }

  const sortTopRatedMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${numMovies}`
    let data = await fetch(url)
    let result = await data.json();
    setMovieList(result.results.popularity.sort())
  }

  const nextPage = () => {
    numMovies++;
    getLatestMovie()
  }

  const previousPage = () => {
    numMovies--;
    getLatestMovie()
  }

  useEffect(() => { getGenre(); }, [])

  if (movieList === null) {
    return (<div>Loading</div>)
  }

  return (
    <div className="App">
      <div className="headerFormat">
            <div>
                <img src="https://i.ibb.co/B6QB16B/baohaus-logo.png" width="300px" />
            </div>
            <div className="rightFormat">
            <div class="btn-group">
                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="https://www.google.com/">Most Popular First</a>
                        <a class="dropdown-item" href="https://www.google.com/">Least Popular First</a>
                    </div>
                </div>
                <h2 className="fontSize" onClick={getLatestMovie}>Now Playing</h2>
                <h2 className="fontSize" onClick={getTopRatedMovie}>Top Rated</h2>
            </div>
        </div>
      <MovieCarousel/>
      <div>
        <MovieList movieList={movieList} genresFromApp={genre} />
      </div>
      <button type="button" className="btn btn-danger btn-lg" onClick={previousPage}>Previous Page</button>
      <button type="button" className="btn btn-danger btn-lg" onClick={nextPage}>Next Page</button>
    </div>
  );
}

export default App;
