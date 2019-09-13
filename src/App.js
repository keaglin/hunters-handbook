import React from 'react'
import Search from './components/Search'
import Details from './components/Details'
import NotFoundPage from './components/NotFoundPage'
import styled from 'styled-components'
import { useRoutes } from 'hookrouter'

const TempWrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 5rem;
  padding-right: 7rem;
  padding-bottom: 5rem;
  /* background-image: url('/img/samplescreen.png'); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

const routes = {
    '/': () => <Search />,
    '/:name': ({name}) => <Details name={name} />
};

function App() {
  const routeResult = useRoutes(routes);
  return (
    <TempWrapper>
      { routeResult || <NotFoundPage /> }
    </TempWrapper>
  )
}

export default App
