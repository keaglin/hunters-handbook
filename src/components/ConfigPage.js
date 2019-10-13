import React from 'react'
import styled from 'styled-components'

const StyledConfig = styled.div`
  color: white;
`

const Config = () => (
  <StyledConfig>
    <>
      <div>
        <h1>How to Use Hunter's Handbook</h1>
        <h2>Instructions:</h2>
        <ol>
          <li>Hover over the Twitch video player to bring up the Hunter's Handbook search icon</li>
          <li><ul><li>It's the brown book with purple bookmark on the left side of the player (the one without the purple box around it)</li></ul></li>
          <li>Click the Hunter's Handbook icon to bring up the search box</li>
          <li>Enter a search term (monster name or monster location) to bring up some results</li>
          <li>Click a result to bring up a "details" view for the selected monster</li>
        </ol>
      </div>
      <div>
        <h2>Usage Notes:</h2>
        <ul>
          <li>Use the white arrow in the top left to minimize Hunter's Handbook to the book icon state</li>
          <li>If you mouse out of the Twitch player, Hunter's Handbook will fade into the background, quietly saving your place</li>
          <li>Hunter's Handbook is "always on" on mobile (no hover or mouseover necessary to bring it up)</li>
        </ul>
      </div>
      <p>Thanks for installing Hunter's Handbook. Please feel free to <a href="mailto:dev@keaglin.com, cooldevlabs@gmail.com?subject=Hunter's Handbook Support">email us</a> any feedback.</p>
    </>
  </StyledConfig>
)

export default Config