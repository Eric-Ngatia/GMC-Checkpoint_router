import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Movie from './Movie';


function Home(props) {

    const [title, setTitle] = useState("")
    const handleChange = (e) =>{
        setTitle(e.target.value)
    }

    return (
        <div>
            <div>
                <div className='container'>
                    <nav className="navbar d-flex">
                        <div className="container-fluid">
                            <form className="d-flex">
                                <input type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
                            </form>
                        </div>
                    </nav>
                </div>
            </div>

            <div>
                <div className='movie__div'>
                    {props.movies.filter((movie) => movie.title.toLowerCase().includes(title.toLocaleLowerCase()) ).map(movie => (
                    <Movie movie={movie}/>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default Home