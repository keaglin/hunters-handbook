import styled from 'styled-components'
import { SearchBox, Hits } from 'react-instantsearch-dom'
import { breakpoint } from './lib/breakpoints'
import './index.css'
// import './fonts/cardo/Cardo-Regular.ttf'
// import './fonts/noto-serif/NotoSerif-Regular.ttf'

export const HandBookWrapper = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  margin-top: 2.5rem;
  margin-left: 1rem;
`

export const HandBook = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 10px;
  /*box-shadow: -1px 1px 6px #000;*/
  :hover {
    opacity: 1;
    animation: glow 1.5s;
  }
  @keyframes glow {
    0% {
      transform: rotate(7deg);
    }
    50% {
      transform: rotate(-7deg);
    }
    100% {
      opacity: 1;
    }
  }
`

/*
----- Search styles ------
*/

export const SearchInput = styled(SearchBox)`
  width: 800px;
  button {
    border: none;
    background: rgba(0, 0, 0);
    opacity: 0.9;
  }
  form {
    display: flex;
    background: url('./img/searchoutline.png') no-repeat center 0,
      url('./img/searchoutline-bottom.png') no-repeat center bottom;
    margin-bottom: 5px;
    width: 624px;
    justify-content: center;
    align-items: center;
  }

  input:focus {
    outline: none;
  }
  input {
    -webkit-appearance: none;
    border-radius: 0;
    border: none;
    color: white;
    font-size: 1.7rem;
    padding: 15px 10px 10px 0px;
    margin: 5px;
    height: 40px;
    width: 404px;
    background: rgba(0, 0, 0);
    opacity: 0.9;
  }
  .submit-search {
    height: 30px;
    width: 30px;
  }

  input:hover {
  }

  li:focus {
    box-shadow: 1px 0px 0px 3px #2e5d34;
  }
`

export const HitItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;

  width: 615px;
  border-top: dashed 1px slategrey;
  :focus {
    outline: none;
  }
  :hover {
    border-top: solid 1px rgba(105, 181, 100, 1);
    border-bottom: solid 1px rgba(105, 181, 100, 1);
  }
`

export const HitList = styled(Hits)`
  color: #fafafa;
  margin-left: 5px;
  ul {
    margin: 0px;
    padding-left: 0px;
  }

  li {
    list-style: none;
    text-shadow: 0 -1px 0 #fff;
  }
  li:hover {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(105, 181, 100, 1) 30%,
      rgba(0, 0, 0, 0.6) 90%
    );
    outline: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  height: 400px;
  width: 622px;
  border: 1px grey solid;
  outline: 3px double #333;
  padding: 10px;
  background: rgba(0, 0, 0);
  opacity: 0.9;
  margin-left: 50px;
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #333;
  }
  ::-webkit-scrollbar {
    width: 7px;
    background-color: #333;
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
  }

  @media ${breakpoint.tablet} {
    padding: 0;
    margin: 0;
    width: 350px;
    height: 100%;
  }
`

export const CloseBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 20px;
  top: -38px;
  font-size: 1.5 rem;
  user-select: none;
  cursor: pointer;
  height: 35px;
  width: 35px;
  color: #fff;
  img {
    height: 20px;
    width: 20px;
  }
  img:hover {
    transform: scale(1.2);
  }
`

/*
----- Details styles ------
*/

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

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
  max-height: 800px;
  max-width: 800px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 3rem;
  overflow-y: auto;
  outline: 3px double #333;
  background: rgba(0, 0, 0);
  opacity: 0.9;
  color: white;
  padding-bottom: 3rem;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  ${detailScrollbarStyles}
`

export const MonsterName = styled.h1`
  color: #61efff;
  display: flex;
  font-family: 'Cardo', serif;
  align-items: center;
  text-transform: uppercase;
`
export const MonsterDescription = styled.div`
  display: inline;
  padding-right: 3rem;
  width: 500px;
  @media ${breakpoint.tablet} {
    display: none;
    padding-top: 0.5rem;
    align-items: center;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
`

export const TypeSpeciesWrapper = styled.div`
  margin-right: 3rem;
  font-family: 'Noto Serif', serif;
  @media ${breakpoint.mobileL} {
    display: none;
  }
`

export const WeaknessDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${breakpoint.tablet} {
    margin-left: 30px;
  }
`

export const MonsterDetails = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`

export const MonsterDetailElement = styled.div`
  font-family: 'Noto Serif', serif;
  max-width: 280px;
  padding-top: 1rem;
  margin-right: 3rem;
`

export const MonsterDetailHeading = styled.h3`
  border-bottom: 1px dashed grey;
  color: #61efff;
  font-family: 'Cardo', serif;
  padding-bottom: 3px;
  margin: 0;
  margin-bottom: 1rem;
`
export const BackBtn = styled.button`
  width: 100px;
  height: 30px;
  color: #fff;
  font-family: 'Noto Serif', serif;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border-radius: 3px;
  outline: 3px single white;
  background-image: linear-gradient(to top, #000 0%, #333 65%, #61efff 100%);
  opacity: 0.87;
  :hover {
    border-radius: 0px;
    outline: solid 3px rgba(105, 181, 100, 1);
  }
`

/*
----- Main Wrapper styles ------
*/
export const TempWrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 5rem;
  padding-right: 7rem;
  padding-bottom: 5rem;
`
