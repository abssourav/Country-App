import React from 'react'

const Country = (props) => {
  const country = props.country || {};
  const { name, flags, capital, population, area } = country;
  const handleRemoveFlag = (name) => {
    props.onRemove(name);
  }

  if (name && flags && capital && population && area) {
    return (
      <div className='px-[3rem] py-[2rem] bg-[#2D3F55] rounded-lg'>
        <img src={flags.png} alt={name} height="150" width="300" />
        <h3>Name: {name.common}</h3>
        <h3>Population: {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>

       <div className='flex justify-center'>
       <button onClick={() => {
          return handleRemoveFlag(name.common)
        }} className='text-lg px-5 py-2 cursor-pointer text-center '>Remove</button>

       </div>
      </div>
    )
  }

}

export default Country
