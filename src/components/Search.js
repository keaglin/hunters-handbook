import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchInput = styled.input`
  background: tomato;
  border-radius: 3px;
  color: white;
  font-size: 2em;
  height: 40px;
`
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

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
    <Form>
      <SearchInput value={searchTerm} onChange={handleChange} type='text' />
      <Button onClick={submitSearch} type='submit'>
        Search
      </Button>
    </Form>
  )
}

export default Search
