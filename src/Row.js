import axios from './axios'
import React, { useEffect, useState } from 'react'
import "./Row.css"
import Card from './Card'


function Row({title, fetchUrl, isLargeRow}) {
    const [hover, setHover] = useState(false)
    const[movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])

    console.log(movies)

  return (
    <div 
    className='row'>
        <h2 className=''>{title}</h2>

        <div className='row_posters'>
            {movies.map((movie)=> 
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&(
                    <Card movie={movie} isLargeRow={isLargeRow}/>
                    // <img 
                    // onMouseEnter={()=> setHover(true)}
                    // onMouseLeave={()=> setHover(false)}
                    // className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    // key={movie.id}
                    // src={`${base_url}${
                    // isLargeRow ? movie.poster_path : movie.backdrop_path
                    // }`} alt={movie.name}/>


                ) 
            )}
        </div>
        
        
    </div>
  )
}

export default Row