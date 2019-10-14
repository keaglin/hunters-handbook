import React, { 
  useState, 
  useEffect, 
  createRef, 
  forwardRef 
} from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import { isMobile } from 'react-device-detect'
import { useTransition, animated } from 'react-spring'
import Details from './Details'
import HandBookIcon from './HandBookIcon'
import {
  HitItemWrapper,
  SearchWrapper,
  HitList,
  SearchInput,
  CloseBox,
  TempWrapper
} from '../styles.js'

const searchClient = algoliasearch(
  'MT2HPEHTBE',
  '91b84fdc5b74fbe6ecc908f7738f0e82'
)



const searchRef = createRef()
const detailRef = createRef()
const App = forwardRef((props, searchRef) => {
  const [toggleDetails, setToggleDetails]           = useState(false)
  const [currentMonsterName, setMonsterName]        = useState('')
  const [isHovering, setIsHovering]                 = useState(true)
  const [toggleEntryIcon, setToggleEntryIcon]       = useState(true)
  const [isSearching, setIsSearching]               = useState(true)
  const [currentSearchValue, setCurrentSearchValue] = useState('')

  // window.twitch.ext.onContext((ctx, ctxPropList) => {
  //   let displayResolution = 0
  //   let dimensions = {}
  //   // get display resolution
  //   if (ctxPropList.includes(displayResolution)) {
  //     displayResolution = ctx.displayResolution
  //   }
  //   // determine position of search/details box
  //   if (searchRef.current) {
  //     dimensions = searchRef.current.getBoundingClientRect()
  //   }
  //   // if the bottom is outside the bounds of the display res
  //   // then shorten it?
  //   console.log(ctx)
  // })

  // const testBounds = () => {
  //   let dimensions;
  //   // if (searchRef) {
  //   //   return searchRef
  //   // }
  //   // if (searchRef.current) {
  //   //   dimensions = searchRef.current.getBoundingClientRect()
  //   //   return [...dimensions]
  //   // }
  // }

  useEffect(() => {
    if (isMobile) {
      setToggleEntryIcon(true)
      setIsHovering(true)
    } else {
    }
  }, [])

  const toggleSearch = () => {
    setToggleDetails(!toggleDetails)
  }

  const handleSearchValueChange = event => {
    setCurrentSearchValue(event.currentTarget.value)
  }

  const handleMonsterClick = currentMonsterName => {
    setMonsterName(currentMonsterName)
    toggleSearch()
  }

  const handleIconClick = () => {
    setToggleEntryIcon(!toggleEntryIcon)
    setIsSearching(true)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseExit = () => {
    setIsHovering(true)
  }

  const handleCloseSearch = () => {
    setIsSearching(false)
    setToggleEntryIcon(!toggleEntryIcon)
  }

  const transitions = useTransition(isHovering, null, {
    from: {
      opacity: 0,
      transform: 'translate3d(0px,0px,0)'
    },
    enter: { opacity: 1, transform: 'translate3d(30px,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50px,0px,0)' }
  })

  const Hit = ({ hit }) => (
    <HitItemWrapper onClick={() => handleMonsterClick(hit.name)} tabIndex='0'>
      {hit.name}
    </HitItemWrapper>
  )

  // const TestBounds = () => (
  //   <div>
  //     <h1>Testing Bounds</h1>
  //     {testBounds()}
  //   </div>
  // )

  const Search = (
    <SearchWrapper ref={searchRef}>
      <CloseBox onClick={handleCloseSearch}>
        <img src='./img/back-arw.svg' alt='back-to-book' />
      </CloseBox>
      <InstantSearch searchClient={searchClient} indexName='dev_MHW-Monsters'>
        <SearchInput
          onChange={handleSearchValueChange}
          defaultRefinement={currentSearchValue}
          translations={{
            placeholder: 'Enter Monster...'
          }}
          submit={
            <img
              src='./img/transparent-arrow.svg'
              className='submit-search'
              alt='search monster list'
            />
          }
        />

        <HitList hitComponent={Hit} />
      </InstantSearch>
    </SearchWrapper>
  )

  const renderSearch = toggleDetails ? (
    <Details monsterName={currentMonsterName} toggleSearch={toggleSearch} />
  ) : (
    Search
  )

  const AnimatedHandBook = transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          {toggleEntryIcon && !isSearching ? (
            <HandBookIcon handleClick={handleIconClick} />
          ) : (
            renderSearch
          )}
        </animated.div>
      )
  )

  return (
    <TempWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      {AnimatedHandBook}
      {/* <TestBounds /> */}
    </TempWrapper>
  )
})

export default App
