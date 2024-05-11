import React from 'react'

const MovieCard = ({poster}) => {

  return (
    <div className='w-48 mr-2'>
        <img className='w-48 h-32 rounded-sm' src={"https://image.tmdb.org/t/p/w500/"+poster}/>
    </div>
  )
}

export default MovieCard