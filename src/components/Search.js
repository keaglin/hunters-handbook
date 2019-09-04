import React from 'react'
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

const SearchInput = styled(SearchBox)`
  input {
    color: white;
    font-size: 2em;
    padding: 1rem;
    margin: 1rem;
    border: solid 0.5px slategrey;
    outline: 1px double #333;
    outline-offset: 3px;
    background-image: linear-gradient(to top, #000 30%, #1d4753 100%);
  }

  input:hover {
    box-shadow: 1px 0px 0px 3px #2e5d34;
  }

  li:focus {
    box-shadow: 1px 0px 0px 3px #2e5d34;
  }
`
const Hit = ({ hit }) => <p>{hit.name}</p>

const HitList = styled(Hits)`
  background: black;
  opacity: 0.4;
  color: white;
  li {
    list-style: none;
  }
`

const searchClient = algoliasearch(
  'MT2HPEHTBE',
  '91b84fdc5b74fbe6ecc908f7738f0e82'
)

const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName='dev_MHW-Monsters'>
      <SearchInput />
      <HitList hitComponent={Hit} />
    </InstantSearch>
  )
}

export default Search
