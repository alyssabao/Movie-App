import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList.js'
import MovieCarousel from './components/MovieCarousel.js'
import LoadMore from './components/LoadMore.js'
import Header from './components/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactModal from 'react-modal';
const apiKey = process.env.REACT_APP_APIKEY;
let numMovies = 1;

function App() {
  let [movieList, setMovieList] = useState(null);
  let [genre, setGenre] = useState(null);
  let [modalOpen, setModalOpen] = useState(false);

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

  const mostPopular = () => {
    const sortedMovieList = movieList.sort(function (a, b) {

      return (b.vote_average - a.vote_average);

    });
    setMovieList([... sortedMovieList]);
    console.log("I am here!", sortedMovieList)

  };

  const leastPopular = () => {
    const sortedMovieList = movieList.sort(function (a, b) {

      return (a.vote_average - b.vote_average);

    });
    setMovieList([... sortedMovieList]);
    console.log("I am least popular!", sortedMovieList)

  };

  const nextPage = () => {
    numMovies++;
    getLatestMovie()
  }

  const previousPage = () => {
    numMovies--;
    getLatestMovie()
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const openModal = () => {
    setModalOpen(true)
  }

  useEffect(() => { getGenre(); }, [])

  if (movieList === null) {
    return (<div>Loading</div>)
  }

  return (
    <div className="App">
      <Header mostPopular = {mostPopular} leastPopular = {leastPopular} getLatestMovie ={getLatestMovie} getTopRatedMovie = {getTopRatedMovie}/>
      <MovieCarousel />
      <div>
        <MovieList movieList={movieList} genresFromApp={genre} openModal ={openModal} />
      </div>
      <LoadMore previousPage = {previousPage} nextPage = {nextPage}/>
      <ReactModal isOpen={modalOpen}>
        <button onClick={()=>closeModal()}>close</button>
        Hi, this is Alyssa!
      </ReactModal>
    </div>
  );
}

export default App;
