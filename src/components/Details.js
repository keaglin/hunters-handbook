import React from 'react'
import {
  DetailWrapper,
  TitleWrapper,
  MonsterName,
  WeaknessDescriptionWrapper,
  MonsterDetails,
  MonsterDetailElement,
  MonsterDetailHeading,
  MonsterDescription,
  TypeSpeciesWrapper,
  BackBtn
} from '../styles'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'
import * as dbModule from '../lib/db/mhw-all-monsters.json'

const findByName = monsterName => {
  const db = dbModule.default
  const found = db.find(monster => monsterName === monster.name)
  return found
}

// twitch.ext.onContext((ctx, ctxProps) => {
//   if (ctxProps.includes('displayResolution')) {
//     // change the height to fit inside the player
//   }
// })

const titleCase = str => {
  // let splitChar
  if (str.includes(' ')) {
    str = str.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ')
    return str
  }
  if (str.includes('-')) {
    str = str.split('-')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join('-')
    return str
  }
  let strArr = str.split('')
  strArr[0] = strArr[0].toUpperCase()
  str = strArr.join('')
  return str
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
    icon,
    species,
    rewards
  } = findByName(props.monsterName)

  const iconStyles = {
    height: '70px',
    width: '70px',
    padding: '0.3rem',
    marginRight: '0.8rem',
    outline: '3px double grey'
  }
  const monsterIcon = () => (
    <Img
      style={iconStyles}
      src={icon}
      loader={<Loader type='Rings' color='#04b53c' height={60} width={60} />}
      alt='monster-icon'
    />
  )

  return (
    <DetailWrapper>
      <div>
        <BackBtn onClick={props.toggleSearch}>Back</BackBtn>
      </div>
      <TitleWrapper>
        <MonsterName>
          <VisibilitySensor>{monsterIcon}</VisibilitySensor>
          {name}
        </MonsterName>
        <TypeSpeciesWrapper>
          <p>{titleCase(species)}</p>
          <p>{titleCase(type)}</p>
        </TypeSpeciesWrapper>
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
                ? resistances.map((res, index) => {
                    return (
                      <li key={index}>
                        {titleCase(res.element)} {res.condition && `when ${res.condition}`}
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
                    return <li key={el}>{titleCase(el)}</li>
                  })
                : ''}
            </ul>
          </MonsterDetailElement>

          <MonsterDetailElement>
            <MonsterDetailHeading>Ailments</MonsterDetailHeading>
            <ul>
              {ailments && ailments.weak.length > 0
                ? ailments.weak.map((ail, index) => {
                    return <li key={index}>{ail.name}</li>
                  })
                : ''}
            </ul>
          </MonsterDetailElement>
          <MonsterDetailElement>
            <MonsterDetailHeading>Rewards</MonsterDetailHeading>
            <ul>
              {rewards && rewards.length > 0
                ? rewards.map((rwd, index) => {
                    return (
                      <li key={index}>
                        {rwd.condition || ''} {rwd.item.name} {rwd.item.rarity}
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
                  .map((weak, index) => {
                    return (
                      <li
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                        key={index}>
                        <span style={{ paddingRight: '0.3rem' }}>
                          {titleCase(weak.element)}
                        </span>
                        <span>{'⭐'.repeat(weak.stars)}</span>
                      </li>
                    )
                  })
              : ''}
          </ul>
        </MonsterDetailElement>
      </WeaknessDescriptionWrapper>
    </DetailWrapper>
  )
}

export default Details
