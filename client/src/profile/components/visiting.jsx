import React from 'react'
import Recipelist from '../../util/recipelist'

const Visiting = ({ pageOwner, recipes }) => {
    return(
        <div>
            <h1>{pageOwner.username}</h1>
            <h3>Their recipes</h3>
            <Recipelist recipes={recipes}/>
        </div>
    )
}

export default Visiting