import React from 'react'
import Search from './components/Search'
import styled from 'styled-components'

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

function App() {
  return (
    <TempWrapper>
      <Search />
    </TempWrapper>
  )
}

export default App
