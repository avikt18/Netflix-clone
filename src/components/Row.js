import React, { useEffect, useState } from 'react';
import axios from '../axios';
import './Row.css';

function Row(props) {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        async function getMovieList() {
            const request = await axios.get(props.fetchURL);
            const { results } = request.data;
            setMoviesList(results);
            return request;
        };
        getMovieList();
    }, [props.fetchURL]);

    console.log(moviesList);
    return (
        <div className='row'>
            <h1 className='row-title'>{props.title}</h1>
            <div className="card-container">
                {moviesList && moviesList.map(movie => 
                    ((props.isLargeRow && movie.poster_path) || (!props.isLargeRow && movie.backdrop_path) )
                    && (<div
                        className={`movie-card ${props.isLargeRow && 'large'}`}
                        key={movie.id}
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url("https://image.tmdb.org/t/p/original/${props.isLargeRow ? movie.poster_path : movie.backdrop_path}")`,
                            backgroundPosition: "center"
                        }}
                    />) 
                )}
            </div>
        </div>
    )
}

export default Row
