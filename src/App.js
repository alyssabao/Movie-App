import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList.js'
import MovieCarousel from './components/MovieCarousel.js'
import LoadMore from './components/LoadMore.js'
import Header from './components/Header.js'
import VidModal from './components/VidModal.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const apiKey = process.env.REACT_APP_APIKEY;
let numMovies = 1;

function App() {
  let [movieList, setMovieList] = useState(null);
  let [genre, setGenre] = useState(null);
  let [modalOpen, setModalOpen] = useState(false);
  let [link, setLink] = useState(null);

  const getGenre = async () => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    let data = await fetch(url)
    let result = await data.json();
    getLatestMovie()
    setGenre(result.genres)
    console.log("genre data looks like", result)
  }

  const getLink = async (id) => {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
    let data = await fetch(url)
    let result = await data.json();
    setLink(result.results[0].key)
    setModalOpen(true)
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
        <MovieList movieList={movieList} genresFromApp={genre} openModal ={openModal} getLink={getLink}/>
      </div>
      <LoadMore previousPage = {previousPage} nextPage = {nextPage}/>
      <VidModal modalOpen={modalOpen} closeModal = {closeModal} link = {link}/>
    </div>
  );
}

export default App;
