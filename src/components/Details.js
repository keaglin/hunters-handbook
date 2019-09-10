import React from 'react'
import styled from 'styled-components'
import { navigate } from 'hookrouter'
import * as dbModule from '../lib/db/mhw-all-monsters-1567568189811.json'


function findByName(name) {
  if (name.includes('%20')) {
    name = name.replace('%20', ' ')
  }
  const db = dbModule.default
  const found = db.find(monster => monster.name === name)
  return found
}

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 1000px;
  margin-top: 10px;
  margin-left: 10px;
  overflow: hidden;
  background: rgba(0,0,0,0.8);
  color: white;
`

const IntroWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  table {
    text-align: center;
  }
`

const StatsWrapper = styled.div`
  margin-left: 10px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  li {
    list-style: none;
  }
`

const Description = styled.p`
  padding-left: 10px;
`

// const BackButton = styled.button`
// `

// const TacticalStats = styled.div``

const Details = (props) => {
  // console.log('props', props)
  const monster = findByName(props.name)
  // console.log(monster)
  const { name, description, elements, locations, ailments, 
        resistances, weaknesses, type, species, rewards } = monster


  // TODO clean this up
  return (
    <DetailWrapper>
      <IntroWrapper>
        <h1>{name}</h1>
        <Description>{description}</Description>
        <table>
          <tbody>
            <tr>
              <th>Species</th>
              <th>Type</th>
            </tr>
            <tr>
              <td>{species}</td>
              <td>{type}</td>
            </tr>
          </tbody>
        </table>
      </IntroWrapper>
      <StatsWrapper>
        <div>
          <h2>Weaknesses</h2>
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
          <h2>Resistances</h2>
          <ul>
            {(resistances && resistances.length > 0) ? resistances.map(res => {
              return (
                <li key={res.element}>
                  {res.element} {res.condition && `when ${res.condition}`}
                </li>
              )
            }) : ''}
            </ul>
          <h2>Elements</h2>
          <ul>
            {(elements && elements.length > 0) ? elements.map(el => {
              return (
                <li key={el}>
                  {el}
                </li>
              )
            }) : ''}
          </ul>
        </div>
        <div>
          <h2>Locations</h2>
          <ul>
            {(locations && locations.length > 0) ? locations.map(loc => {
              return (
                <li key={loc.id}>{loc.name}</li>
              )
            }) : ''}
          </ul>
          <h2>Ailments</h2>
          <ul>
            {(ailments && ailments.length > 0) ? ailments.map(ail => {
              return (
                <li key={ail.id}>
                  {ail.name}
                </li>
                )
              }) : ''}
          </ul>
          <h2>Rewards</h2>
          <ul>
            {(rewards && rewards.length > 0) ? rewards.map(rwd => {
              return (
                <li key={rwd.id}>
                  {rwd.name}
                </li>
              )
            }) : ''}
          </ul>
        </div>
      </StatsWrapper>
      <div>
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    </DetailWrapper>
  )
}

export default Details