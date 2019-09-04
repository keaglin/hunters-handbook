import React, { useState } from 'react'
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

const Form = styled.form`
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`

//need to overide styles until i figure out a better style solution
const SearchInput = styled(SearchBox)`
  input {
    color: white;
    font-size: 2em;
    height: 40px;
    margin 1em;
    padding: 4em;
    background: tomato;
    border-radius: 3px;
  }
`
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const searchClient = algoliasearch(
  '3PXCDFQMIE',
  'dc6695ad2336b26a71391aa617bfc010'
)

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
    <InstantSearch searchClient={searchClient} indexName='test_Monsters'>
      <SearchInput />
      <Hits />
    </InstantSearch>
  )
}

export default Search
