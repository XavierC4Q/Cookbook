import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/navbar.css'

const VisitingLinks = () => (
    <div className='userlinks-container'>
        <Link to='/login'>Login</Link>
        {" "}
        <Link to='/register'>Register</Link>
    </div>
)

export default VisitingLinks