import React, {useState} from 'react'
import styled from 'styled-components'
import { breakpoint } from '../breakpoints'
import * as dbModule from '../lib/db/mhw-all-monsters-1567568189811.json'






const detailScrollbarStyles = `
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
::-webkit-scrollbar {
  width: 7px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  background-color: #04b53c;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 15%,
    transparent 25%,
    transparent 10%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 25%,
    transparent
  );
}`

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
  height: 250px;
  max-width: 350px;
  margin-top: 10px;
  margin-left: 10px;
  overflow-y: auto;
  outline: 3px double #333;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  @media ${breakpoint.mobileL} {
    max-width: 370px;
    max-height: 500px;
  }

  @media ${breakpoint.tablet} {
    max-width: 600px;
    height: 550px;
  }

  @media ${breakpoint.laptop} {
    max-width: 700px;
    height: 650px;
  }
  ${detailScrollbarStyles}
`

const MonsterName = styled.h1`
  color: #61efff;
  text-transform: uppercase;
  img {
    height: 20px;
    padding-right: 5px;
  }
`
const MonsterDescription = styled.div`
  display: none;
  padding-top: 0.5rem;
  align-items: center;
  @media ${breakpoint.laptop} {
    display: inline;
    padding-right: 3rem;
    width: 500px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;

  }
`

const WeaknessDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const MonsterDetails = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`

const MonsterDetailElement = styled.div`
  max-width: 220px;
  padding-top: 1rem;
`

const MonsterDetailHeading = styled.h3`
  border-bottom: 1px dashed grey;
  color: #61efff;
  padding-bottom: 3px;
  margin: 0;
  margin-bottom: 1rem;
`

const Details = props => {
  const [MonsterObject, setMonster] = useState({
    name: '',
    description: '',
    elements: '',
    locations: '',
    ailments: '',
    resistances: '',
    weaknesses: '',
    type: '',
    species: '',
    rewards: ''
  })

  function findByName(name) {
    if ( name && name.includes('%20')) {
      name = name.replace('%20', ' ')
    }
    const db = dbModule.default
    const found = db.find(monster => monster.name === name)
    setMonster()
    return found
  }

  console.log(props)
     const {
    name,
    description,
    elements,
    locations,
    ailments,
    resistances,
    weaknesses,
    type,
    species,
    rewards
  } = MonsterObject
  
  


  // TODO clean this up -- see notes
  return (
    <DetailWrapper>
      <TitleWrapper>
        <MonsterName>
          <img src='/img/transparent-arrow.svg' alt='arrow' />
          {name}
        </MonsterName>
        <div>
          <p>{species}</p>
          <p>{type}</p>
        </div>
      </TitleWrapper>
      <WeaknessDescriptionWrapper>
        <MonsterDetails>
          <MonsterDescription>{description}</MonsterDescription>
          <MonsterDetailElement>
            <MonsterDetailHeading>Locations</MonsterDetailHeading>
            <ul>
            {(locations && locations.length > 0) ? locations.map(loc => {
              return (
                <li key={loc.id}>{loc.name}</li>
              )
            }) : ''}
            </ul>
          </MonsterDetailElement>
          <MonsterDetailElement>
            <MonsterDetailHeading>Resistances</MonsterDetailHeading>
            <ul>
            {(resistances && resistances.length > 0) ? resistances.map(res => {
              return (
                <li key={res.element}>
                  {res.element} {res.condition && `when ${res.condition}`}
                </li>
              )
            }) : ''}
            </ul>
          </MonsterDetailElement>
          <MonsterDetailElement>
            <MonsterDetailHeading>Elements</MonsterDetailHeading>
            <ul>
            {(elements && elements.length > 0) ? elements.map(el => {
              return (
                <li key={el}>
                  {el}
                </li>
              )
            }) : ''}
          </ul>
          </MonsterDetailElement>

          <MonsterDetailElement>
            <MonsterDetailHeading>Ailments</MonsterDetailHeading>
            <ul>
            {(ailments && ailments.length > 0) ? ailments.map(ail => {
              return (
                <li key={ail.id}>
                  {ail.name}
                </li>
                )
              }) : ''}
            </ul>
          </MonsterDetailElement>
          <MonsterDetailElement>
            <MonsterDetailHeading>Rewards</MonsterDetailHeading>
            <ul>
            {(rewards && rewards.length > 0) ? rewards.map(rwd => {
              return (
                <li key={weaknesses.element}>
                  {weaknesses.element} {'⭐'.repeat(weaknesses.stars)}
                </li>
              )
            }) : ''}
            </ul>
          </MonsterDetailElement>
        </MonsterDetails>
        <MonsterDetailElement>
          <MonsterDetailHeading>Weaknesses</MonsterDetailHeading>
          <ul>
          {(weaknesses && weaknesses.length > 0) ? weaknesses
          .sort((a, b) => (a.stars > b.stars) ? -1 : 1)
          .map(weak => {
            return (
              <li key={weak.element}>
                {weak.element} {"⭐".repeat(weak.stars)}
              </li>
            )
          }) : ''}
          </ul>          
        </MonsterDetailElement>
      </WeaknessDescriptionWrapper>

      <div>
        <button onClick={props.toggleSearch} >Back</button>
      </div>
    </DetailWrapper>
  )
}

export default Details