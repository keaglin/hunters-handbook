import React from 'react'
import { HandBookWrapper, HandBook } from '../styles'

const HandBookIcon = props => {
  return (
    <HandBookWrapper>
      <HandBook onClick={props.handleClick} src={'./img/handbookicon.webp'} />
    </HandBookWrapper>
  )
}

export default HandBookIcon
