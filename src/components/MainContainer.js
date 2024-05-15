import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"


const MainContainer = () =>{
    const movies = useSelector(store => store.movie?.nowPlayingMovies);
     if(!movies) return;
     const movie1=movies[16];
     const {original_title, overview, id}=movie1;
    return(
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground id={id}/>
        </div>
    )
}
export default MainContainer;