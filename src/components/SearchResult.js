

import img from "./imggg.jpg"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function SearchResult() {
    const {movie} = useParams();
    const [data, setData] = useState();

const url=`https://imdb-api.com/en/API/Search/k_ha7nd8lc/${movie}`

useEffect(() => {
  async function fun1() {
    const res = await axios.get(url)
    // console.log(res.data.results);
    console.log(res)
    setData(res.data.results)
  }
  fun1()

}, [url])

  console.log(data);
  return (
    // <div className="row">
    <div className='movieCards'>
      {data?.map((card)=>(
        
        <div className='movieCard '>
                <Link className='movieCardLink ' to={`/movie/${card.id}`}>
                <img alt="" src={card.image? card.image : img} className='movieCardImg ' />
                <h2 className='movieCardTitle  '>{card.title}</h2>
                </Link>
        </div>
        
      ))}
        
    </div>
    // </div>
  )
}



export default SearchResult