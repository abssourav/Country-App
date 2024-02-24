import React, { useState, useEffect } from "react"
import axios from 'axios'

import Countries from "./components/Countries"
import Search from "./components/Search"


function App() {


  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filterData, setFilterData] = useState(null)


  // data fachting
  const dataFetching = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Call dataFetching with the provided URL
    dataFetching("https://restcountries.com/v3.1/all");
  }, []);


  // upadate filterData
  useEffect(() => {
    setFilterData(data)
  }, [data])


  // Country remove functionality
  const onRemove = (countryName) => {
    const filterCountry = filterData.filter((country => country.name.common !== countryName))
    setFilterData(filterCountry)

  }


  // searchingFilter country



  const handleSearch= (searchValue)=>{
    let value = searchValue.toLowerCase()
    console.log(value)
 
    const filterSearchingCountry = data.filter((country)=> {
      const countryName = country.name.common.toLowerCase()
      return countryName.startsWith(value)
    } )
    setFilterData(filterSearchingCountry)

  }


  return (
    <div>
      <h1 className="text-center ">Country App</h1>
      <section>
      <Search onSeacrhFilter={handleSearch}/>
      {loading && <h4>Data is loading</h4>}
      {error && <h4>{error}</h4>}
      {filterData && <Countries data={filterData} onRemove={onRemove}  />}
      </section>
    </div>
  )
}

export default App
