import React from 'react'

const Search = (props) => {
    const handleSearch=(e)=>{
        props.onSeacrhFilter(e.target.value)
    }

  return (
    <div className="text-center my-5 ">
      <input type="text" placeholder='Search...' onChange={handleSearch} className='text-lg px-10 py-2'/>
    </div>
  )
}

export default Search
