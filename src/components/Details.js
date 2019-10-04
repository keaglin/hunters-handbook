import React from 'react'
import {
  DetailWrapper,
  TitleWrapper,
  MonsterName,
  WeaknessDescriptionWrapper,
  MonsterDetails,
  MonsterDetailElement,
  MonsterDetailHeading,
  MonsterDescription
} from '../styles'
import * as dbModule from '../lib/db/mhw-all-monsters-1567568189811.json'

const findByName = monsterName => {
  const db = dbModule.default
  const found = db.find(monster => monsterName === monster.name)
  return found
}

const Details = props => {
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
  } = findByName(props.monsterName)

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
              {locations && locations.length > 0
                ? locations.map(loc => {
                    return <li key={loc.id}>{loc.name}</li>
                  })
                : ''}
            </ul>
          </MonsterDetailElement>
          <MonsterDetailElement>
            <MonsterDetailHeading>Resistances</MonsterDetailHeading>
            <ul>
              {resistances && resistances.length > 0
                ? resistances.map(res => {
                    return (
                      <li key={res.element}>
                        {res.element} {res.condition && `when ${res.condition}`}
                      </li>
                    )
                  })
                : ''}
            </ul>
          </MonsterDetailElement>
          <MonsterDetailElement>
            <MonsterDetailHeading>Elements</MonsterDetailHeading>
            <ul>
              {elements && elements.length > 0
                ? elements.map(el => {
                    return <li key={el}>{el}</li>
                  })
                : ''}
            </ul>
          </MonsterDetailElement>

          <MonsterDetailElement>
            <MonsterDetailHeading>Ailments</MonsterDetailHeading>
            <ul>
              {ailments && ailments.length > 0
                ? ailments.map(ail => {
                    return <li key={ail.id}>{ail.name}</li>
                  })
                : ''}
            </ul>
          </MonsterDetailElement>
          <MonsterDetailElement>
            <MonsterDetailHeading>Rewards</MonsterDetailHeading>
            <ul>
              {rewards && rewards.length > 0
                ? rewards.map(rwd => {
                    return (
                      <li key={rwd.id}>
                        {rwd.condition} {rwd.item.name} {rwd.item.rarity}
                        {rwd.item.carryLimit} {rwd.item.value}
                      </li>
                    )
                  })
                : ''}
            </ul>
          </MonsterDetailElement>
        </MonsterDetails>
        <MonsterDetailElement>
          <MonsterDetailHeading>Weaknesses</MonsterDetailHeading>
          <ul>
            {weaknesses && weaknesses.length > 0
              ? weaknesses
                  .sort((a, b) => (a.stars > b.stars ? -1 : 1))
                  .map(weak => {
                    return (
                      <li key={weak.element}>
                        {weak.element} {'⭐'.repeat(weak.stars)}
                      </li>
                    )
                  })
              : ''}
          </ul>
        </MonsterDetailElement>
      </WeaknessDescriptionWrapper>

      <div>
        <button onClick={props.toggleSearch}>Back</button>
      </div>
    </DetailWrapper>
  )
}

export default Details
