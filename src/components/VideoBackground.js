import React from 'react';
import { useSelector } from 'react-redux';
import useTrailerBackground from '../hooks/useTrailerBackground';

const VideoBackground = ({id}) => {

    useTrailerBackground(id)

    const trailer = useSelector(store => store.movie.trailer)
    if(!trailer) return;

  return (
    <div>
        <iframe className="w-screen aspect-video"
         src={"https://www.youtube.com/embed/"+trailer[0]?.key+"?&autoplay=1&mute=1&loop=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
    </div>
  )
  
}

export default VideoBackground