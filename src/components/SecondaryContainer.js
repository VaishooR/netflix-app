import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movie.nowPlayingMovies);
  const popularMovies = useSelector(store => store.movie.popularMovies);
  const topRatedMovies = useSelector(store => store.movie.topRatedMovies);
  const upcomingMovies = useSelector(store => store.movie.upcomingMovies);

  return (
    <div className='bg-black pb-20'>
      <div className='-mt-56 pl-6 relative z-50'>
        <MovieList movies={movies} title="Now Playing"/>
        <MovieList movies={topRatedMovies} title="Top Rated Movies"/>
        <MovieList movies={popularMovies} title="New on Netflix"/>
        <MovieList movies={upcomingMovies} title="Upcoming Movies"/>
      </div> 
    </div>
  )
}

export default SecondaryContainer