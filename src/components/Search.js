import React from 'react'
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

const SearchInput = styled(SearchBox)`
  input {
    color: white;
    font-size: 2em;
    height: 50px;
    width: 300px;
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

const HitItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 5px;
  margin-top: 1px;
  margin-bottom: 1px;
  border-top: dashed 1px slategrey;
  :focus {
    outline: none;
  }
  :hover {
    border-top: solid 1px rgba(105, 181, 100, 1);
    border-bottom: solid 1px rgba(105, 181, 100, 1);
  }
`

const Hit = ({ hit }) => (
  <HitItemWrapper tabIndex='0'>{hit.name}</HitItemWrapper>
)

const HitList = styled(Hits)`
  background: rgba(0, 0, 0, 0.6);
  width: 300px;
  color: #fafafa;
  ul {
    margin: 5px;
    padding-left: 5px;
  }

  li {
    list-style: none;
    text-shadow: 0 -1px 0 #fff;
  }
  li:hover {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(105, 181, 100, 1) 30%,
      rgba(0, 0, 0, 0.6) 90%
    );
    outline: none;
  }
`

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  width: 1000px;

  overflow: hidden;
`

const searchClient = algoliasearch(
  'MT2HPEHTBE',
  '91b84fdc5b74fbe6ecc908f7738f0e82'
)

const Search = () => {
  return (
    <SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName='dev_MHW-Monsters'>
        <SearchInput />
        <HitList hitComponent={Hit} />
      </InstantSearch>
    </SearchWrapper>
  )
}

export default Search
