import React from 'react'
import '../styles/navbar.css'

const Search = () => {
    return (
        <div className='search-container'>
            <input className='search-input' type='text' placeholder='search here'/>
            <button className='search-button'>SEARCH</button>
        </div>
    )
}

export default Search
