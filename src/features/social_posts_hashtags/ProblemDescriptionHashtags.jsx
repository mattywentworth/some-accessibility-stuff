import React from 'react';
import { Link } from 'react-router-dom'

export const ProblemDescriptionHashtags = () => {
    
    return (
        <div>
            <p>This is a description of the problem.</p>
            <Link to='demo'><button>Link to demo</button></Link>
        </div>
    )
}