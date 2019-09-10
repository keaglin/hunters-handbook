import React from 'react'
import styled from 'styled-components'
import { navigate } from 'hookrouter'
import { breakpoint } from '../breakpoints'
import * as dbModule from '../lib/db/mhw-all-monsters-1567568189811.json'

function findByName(name) {
  if (name.includes('%20')) {
    name = name.replace('%20', ' ')
  }
  const db = dbModule.default
  const found = db.find(monster => monster.name === name)
  return found
}

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
  justify-content space-between;
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

// const BackButton = styled.button`

// `

// const TacticalStats = styled.div``

const Details = props => {
  console.log('props', props)
  const monster = findByName(props.name)
  console.log(monster)
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
  } = monster

  return (
    <DetailWrapper>
      <TitleWrapper>
        <MonsterName>{'» ' + name}</MonsterName>
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
              {locations.map(loc => {
                return <li key={loc.id}>{loc.name}</li>
              })}
            </ul>
          </MonsterDetailElement>
          <MonsterDetailElement>
            <MonsterDetailHeading>Resistances</MonsterDetailHeading>
            <ul>
              {resistances.map(res => {
                return (
                  <li key={res.element}>
                    {res.element} {res.condition && `when ${res.condition}`}
                  </li>
                )
              })}
            </ul>
          </MonsterDetailElement>
          <MonsterDetailElement>
            <MonsterDetailHeading>Elements</MonsterDetailHeading>
            <ul>
              {elements.map(el => {
                return <li key={el}>{el}</li>
              })}
            </ul>
          </MonsterDetailElement>

          <MonsterDetailElement>
            <MonsterDetailHeading>Ailments</MonsterDetailHeading>
            <ul>
              {ailments.map(ail => {
                return <li key={ail.id}>{ail.name}</li>
              })}
            </ul>
          </MonsterDetailElement>
          <MonsterDetailElement>
            <MonsterDetailHeading>Rewards</MonsterDetailHeading>
            <ul>
              {rewards.map(rwd => {
                return <li key={rwd.id}>{rwd.name}</li>
              })}
            </ul>
          </MonsterDetailElement>
        </MonsterDetails>
        <MonsterDetailElement>
          <MonsterDetailHeading>Weaknesses</MonsterDetailHeading>
          <ul>
            {weaknesses.map(weak => {
              // need to sort this before displaying

              return (
                <li key={weak.element}>
                  {weak.element} {'⭐'.repeat(weak.stars)}
                </li>
              )
            })}
          </ul>
        </MonsterDetailElement>
      </WeaknessDescriptionWrapper>

      <div>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    </DetailWrapper>
  )
}

export default Details