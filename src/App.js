import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MovieCard from './Components/MovieCard';
import Movie from './Components/Movie';




function App(props) {

  const [movies, setMovies] = useState([

    {
      id: 1,
      title:"Blood & Water",
      image: './images/b&w.jpg',
      vidLink:'https://www.youtube.com/embed/2_FY75DbQ7A',
    },

    {
      id: 2,
      title:"Harriet Tubman",
      image: '/images/harriet.jpg',
      vidLink:'https://www.youtube.com/embed/GqoEs4cG6Uw',
    },

    {
      id: 3,
      title:"Hunger Games - La révolte",
      image: '/images/hgames3.jpg',
      vidLink:'https://www.youtube.com/embed/zdMIft77FEY',
    },

    {
      id: 4,
      title:"Hunger Games - L'embrasement",
      image: '/images/hgames5.jpg',
      vidLink:'https://www.youtube.com/embed/nbzjLhsmVXc',
    },

    {
      id: 5,
      title:"Naruto Shippuden - Road to the ninja",
      image: '/images/naruto.jpg',
      vidLink:'https://www.youtube.com/embed/qzZ4Qooh4GI',
    },

    {
      id: 6,
      title:"Red Notice",
      image: '/images/rednot.jpg',
      vidLink:'https://www.youtube.com/embed/xrtrnLbWTZ8',
    },

    {
      id: 7,
      title:"Red Sparrow",
      image: '/images/redspa.jpg',
      vidLink:'https://www.youtube.com/embed/JCTHIovjZVw',
    },

    {
      id: 8,
      title:"xXx - Le retour de Xander Cage",
      image: "/images/xXx.jpg",
      vidLink:'https://www.youtube.com/embed/04LbFxhswrY',
    },

  ])



  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home movies={movies} />} />
        <Route path='detail/:id' element={<MovieCard movies={movies}/>} /> 
      </Routes>
    </div>
  )
}


export default App