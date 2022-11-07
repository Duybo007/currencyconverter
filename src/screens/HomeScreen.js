import React from 'react'
import Banner from '../Banner'
import "./HomeScreen.css"
import Nav from '../Nav'
import requests from '../Requests'
import Row from '../Row'

function HomeScreen() {
  return (
    <div className='HomeScreen'>
        <Nav/>
    
        <Banner/>

        <Row
          title="NETFLIX ORIGINAL"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchToprated}/>
        <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies}/>
        <Row title="War Movies" fetchUrl={requests.fetchWarMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMoviews}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMoviews}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen