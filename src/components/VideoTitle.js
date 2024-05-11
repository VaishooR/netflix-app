import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-52 px-10 absolute text-white bg-gradient-to-r from-black">
        <h1 className="font-bold text-6xl">{title}</h1>
        <p className='pt-8 w-1/2'>{overview}</p>
        <div>
            <button className="w-32 bg-white p-2 mr-4 mt-6 text-black cursor-pointer rounded-md">Play</button>
            <button className="w-32 bg-gray-600 text-white p-2 mr-4 mt-6 bg-opacity-60 cursor-pointer rounded-md">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle