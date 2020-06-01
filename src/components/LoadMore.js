import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import loadMoreMovies from 'C:/Users/inxjv/Desktop/Mojave/movieapp/src/App.js'

export default function LoadMore(props) {
    return (
        <div>
            <button type="button" className="btn btn-danger btn-lg" onClick={() => props.previousPage()}>Previous Page</button>
            <button type="button" className="btn btn-danger btn-lg" onClick={() => props.nextPage()}>Next Page</button>
        </div>
    )
}
