import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardMovie = ({ moviProp }) => {
  return (
    <Col xs='6' sm='6' md='4' lg='3' className='my-1'>
        <Link to={`/movie/${moviProp.id}`}>
          <div className='card'>
              <img src= {`https://image.tmdb.org/t/p/w500${moviProp.poster_path}`} className='card-image'/>
              <div className='card-overlay'>
                  <div className='overlay-text text-center w-100 p-2'>
                      <p>اسم الفيلم : {moviProp.title}</p>
                      <p>تاريخ الإصدار : {moviProp.release_date}</p>
                      <p>عدد المقيمين : {moviProp.vote_count}</p>
                      <p>التقييم : {moviProp.vote_average}</p>
                  </div>
              </div>
          </div>
        </Link>
    </Col>
  )
}

export default CardMovie
