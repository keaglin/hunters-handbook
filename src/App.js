import React, {useState} from 'react'
import Details from './components/Details'
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch} from 'react-instantsearch-dom'
import {HitItemWrapper, SearchWrapper, HitList, SearchInput} from './styles.js'


const TempWrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 5rem;
  padding-right: 7rem;
  padding-bottom: 5rem;
  background-image: url('/img/samplescreen.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`


const searchClient = algoliasearch(
  'MT2HPEHTBE',
  '91b84fdc5b74fbe6ecc908f7738f0e82'
)

const App = () => {
  const [toggleDetails, setToggleDetails] = useState(false)
  const [currentMonsterName, setMonsterName] = useState('')
  const toggleSearch = () => {
    setToggleDetails(!toggleDetails)
   }

   const handleMonsterClick = (currentMonsterName) => {
    setMonsterName(currentMonsterName)
    toggleSearch()
   }
   
   const Hit = ({ hit }) => 
   (
    <HitItemWrapper onClick={() => handleMonsterClick(hit.name)} tabIndex='0'>{hit.name}</HitItemWrapper>
  )

  const Search = (
    <SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName='dev_MHW-Monsters'>
        <SearchInput
          translations={{
            placeholder: 'Enter Monster...'
          }}
          submit={
            <img
              src='/img/transparent-arrow.svg'
              class='submit-search'
              alt='search monster list'
            />
          }
        />
        <HitList hitComponent={Hit} />
      </InstantSearch>
    </SearchWrapper>
  )
  
  return (
    <TempWrapper>
      {toggleDetails ? <Details monsterName={currentMonsterName} toggleSearch={toggleSearch} />  : Search }
  
    </TempWrapper>
  )
}

export default App
