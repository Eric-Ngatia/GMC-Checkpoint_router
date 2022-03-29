import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';
import { useState } from 'react';

function NavBar(props) {

    const [title, setTitle] = useState("")

    const handleChange = (e) =>{
        setTitle(e.target.value)
    }


    return (
        <div className='container'>
            <nav classname="navbar d-flex">
                <div classname="container-fluid">
                    <form classname="d-flex">
                        <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
                        <button classname="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar