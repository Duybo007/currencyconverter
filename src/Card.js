import React, { useState } from 'react'
import "./Card.css"
import {BeakerIcon} from '@heroicons/react/solid'


function Card({movie, isLargeRow}) {
    const [hover, setHover] = useState(false)
    const base_url = "https://image.tmdb.org/t/p/original/"
  return (                
    <div onMouseLeave={()=> setHover(false)}>
    <img 
      
      onMouseEnter={()=> setHover(true)}
      className={`row_poster ${isLargeRow && "row_posterLarge"}`}
      key={movie.id}
      src={`${base_url}${
      isLargeRow ? movie.poster_path : movie.backdrop_path
      }`} alt={movie.name}/>
    
    {hover && (
      <div className='hovered'>
        <div className='hovered_poster'>
          <img 
          
          className='hovered_img' src={`${base_url}${movie.backdrop_path}`}/>
        </div>

        <div className='hovered_info'>
          <h3>{movie?.title || movie?.name || movie?.original_name}</h3>
        </div>
        <div className='hovered_icons'>
          <BeakerIcon />
        </div>
      </div>
    )}
    
    
    </div>
  )
}

export default Card

