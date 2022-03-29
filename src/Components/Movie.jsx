import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Movie.css';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-regular-svg-icons';



function Movie(props) {
    return (
            <div className='container main__box'>
                <div className='movie__box'>
                    <div className='img__container'>
                        <img height={300} width={240} src={props.movie.image}  />
                        <Link to={`detail/${props.movie.id}`}> <FontAwesomeIcon icon={faCirclePlay} className='overlay' /> </Link>
                    </div>
                    <div className='more__details'> 
                        <h3>
                            {props.movie.title}
                        </h3>
                    </div>
                </div>
            </div>
    )
}

export default Movie