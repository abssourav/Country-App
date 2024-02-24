import React from 'react'
import Country from './Country'

const Countries = (props) => {

  return (
    <div className='flex gap-5 flex-wrap w-full justify-center  '>
      <Country />
      {props.data.map((country, index)=>{
    
        return <Country key={index} country={country} onRemove={props.onRemove}/>
      })}
    </div>
  )
}

export default Countries
