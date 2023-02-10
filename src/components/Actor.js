import "./Actor.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Actor() {
    const {actorId} =useParams();
    // console.log(movieId);
const [data, setData] = useState();
    //  store it in a state
    const url=`https://imdb-api.com/en/API/Name/k_ha7nd8lc/${actorId}`;
    
    useEffect(() => {
    async  function fun1() {
            const result = await axios.get(url)
            console.log(result);
            setData(result.data)
        }
        fun1();
    }, [url]);
  return (
    <div>
         <div className='actorCircle'>
             <img src={data?.image} alt='actor' />
              
            </div>
               <div className='actorDetails'>
                    <h1>{data?.name}</h1>
                    <h5>{data?.role}</h5>
                    <p>{data?.summary}</p>
                    <h2>{data?.awards}</h2>
                </div>
                <div className='actorMovies'>
                  {
                    data?.knownFor?.map((movie) => (

              <div className='actorCard'>
                        <Link to={`/movie/${movie.id}`}>
                          <img src= {movie?.image} alt='movie'/>
                          <h3>{movie?.title}</h3>
                         </Link>
                    </div> 
                    ))
                  }
                     
                </div>
    </div>
  )
}

export default Actor
