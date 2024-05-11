import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTrailerBackground = (id) => {
    const dispatch = useDispatch();

    const getVideoBackground = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,API_OPTIONS);
        const json = await data?.json();
        const filtertrailerData = json?.results?.filter(trailer => trailer.name === "Official Trailer");
        const trailerData= filtertrailerData !== null? filtertrailerData : json?.results[0]
        dispatch(addTrailer(trailerData))
    }

    useEffect(()=>{
        getVideoBackground();
    },[])

}
export default useTrailerBackground;