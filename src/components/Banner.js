import React, { useEffect, useState } from 'react';
import "./Banner.css";
import instance from '../axios';
import requests from '../requests';

function Banner() {
    const [bannerMovie, setBannerMovie] = useState([]);
    
    useEffect(() => {   
        async function getBannerMovie(){
            const request = await instance.get(requests.fetchNetflixOriginals);
            const {results} = request.data;
            results ? (setBannerMovie(
                results [
                        Math.floor(Math.random() * results.length - 1)
                    ]
            )) : getBannerMovie();
            return request;
        };
        getBannerMovie();
    },[]);
    console.log('🔫', bannerMovie);
    function truncate(text) {
        if(text && text.length > 150){
            return text.slice(0,150) + "...";
        } else {
            return text;
        }
    }

    return (
        <div 
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}")`,
                backgroundPosition: "center top"
            }}
        >
            <div className='banner-contents'>
                <h1 className='movie-title'>{bannerMovie?.name || bannerMovie?.title || bannerMovie?.original_name}</h1>
                <h3 className='movie-rating'>{bannerMovie?.vote_average || ""}</h3>
                <p className='movie-summary'>{truncate(bannerMovie?.overview)}</p>
                <div className='banner-buttons'>
                    <button className='banner-btn'>Play</button>
                    <button className='banner-btn'>+My List</button>
                </div>
            </div>
                <div className='banner-faderBottom' />
        </div>
    )
};

export default Banner;
