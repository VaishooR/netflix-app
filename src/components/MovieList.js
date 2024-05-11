import React from 'react'
import MovieCard from './MovieCard';
import '../App.css';

const MovieList = ({title,movies}) => {
  return (
    <div className='p-4'>
      <h1 className='text-xl my-2 text-white'>{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth no-scrollbar">
        
        <div className="flex">
            {movies?.map(eachmovie => <MovieCard poster={eachmovie.poster_path}/>)}
        </div>
      </div>
        
    </div>
  )
}

export default MovieList