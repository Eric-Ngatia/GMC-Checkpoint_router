import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import Movie from './Movie';



function MovieCard(props) {

    let id = useParams().id;

    let movie = props.movies.find( movie => movie.id == id);


    return (
        
        <div>
            <iframe 
                width="955" 
                height="538" 
                src={movie.vidLink}
                title={movie.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
        
    )
}

export default MovieCard;