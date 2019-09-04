import React, { useState } from 'react'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const resetSearchInput = () => {
    setSearchTerm('')
  }

  const submitSearch = e => {
    e.preventDefault()
    console.log(searchTerm)
    resetSearchInput()
  }

  return (
    <form className='search'>
      <input value={searchTerm} onChange={handleChange} type='text' />
      <input onClick={submitSearch} type='submit' value='SEARCH' />
    </form>
  )
}

export default Search
