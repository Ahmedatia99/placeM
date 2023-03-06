import React from 'react'
import Details from './Details'

export default function Auctions(props) {

  return (
    <div className='flex justify-start gap-12 mt-9'>
      <Details number={`240k+`} description={`Total`}/>
      <Details number={`100k+`} description={`Auctions`}/>
      <Details number={`240k+`} description={`Artists`}/>
    </div>
  )
}
