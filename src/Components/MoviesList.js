import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import PaginationComponent from './PaginationComponent'

const MoviesList = ({ moviesProps, currentPageProp, pagesCountProp }) => {
  return (
    <Row className='mt-3'>

      {
        moviesProps.length >= 1 ? (
          moviesProps.map((movie) => {
            return (<CardMovie key={movie.id} moviProp={movie}/>)
          })
        ) : <h2 className='text-center p-5 font-bold fs-3'>لا يوجد أفلام لعرضها ...</h2>
      }
      
      {
        moviesProps.length >= 1 ? (
          <PaginationComponent currentPaginationProp={currentPageProp} pagesCountProp={pagesCountProp} />
        ) : null
      }
    </Row>
  )
}

export default MoviesList
