import React from 'react';
import 'C:/Users/inxjv/Desktop/Mojave/movieapp/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

export default function Header(props) {
    return (
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
              <a class="dropdown-item" onClick={() => props.mostPopular()}>Most Popular First</a>
              <a class="dropdown-item" onClick={() => props.leastPopular()}>Least Popular First</a>
            </div>
          </div>
          <h2 className="fontSize" onClick={() => props.getLatestMovie()}>Now Playing</h2>
          <h2 className="fontSize" onClick={() => props.getTopRatedMovie()}>Top Rated</h2>
        </div>
      </div>
    )
}
