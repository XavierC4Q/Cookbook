import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/navbar.css'

const HomeLink = () => (
    <div className='homelink-container'>
        <Link to='/'>
            <div className='homelink-image-container'>
                <img src='https://cdn2.iconfinder.com/data/icons/food-ink/512/restaurant-512.png' className='homelink-image' alt='home'/>
            </div>
        </Link>
    </div>
)

export default HomeLink