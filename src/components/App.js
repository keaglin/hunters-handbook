import React, { useState } from 'react'
import Search from './Search'
import Details from './Details'
import NotFoundPage from './NotFoundPage'
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

// const routes = {
//     '/': () => <Search />,
//     '/details': (props) => <Details name={props.hit.name} />
// };

// function App() {
//   const routeResult = useRoutes(routes);
//   return (
//     <TempWrapper>
//       { routeResult || <NotFoundPage /> }
//     </TempWrapper>
//   )
// }


function App() {
  const [results, showResults] = useState(false)
  // if results? show details
  // if !results? show search
  return results ? <Details /> : <Search results={results} showResults={showResults} />
}

export default App
