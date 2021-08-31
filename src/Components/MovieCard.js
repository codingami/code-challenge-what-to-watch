import React, { useState, useEffect } from 'react';
import axios from 'axios';


function MovieCard() {
    const url = 'https://www.omdbapi.com/?s=man&apikey=d557bda'
    const [title, setTitle] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setTitle(response.data)
        })
    }, [url])

    if(title){
        return (
            <div>
                <h1>Movies will display here</h1>
                <h2>{title.name}</h2>
            </div>
        )
     }

     return (
         <div>
             
         </div>
     )
}

export default MovieCard;