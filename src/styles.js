import styled from 'styled-components'
import { SearchBox, Hits } from 'react-instantsearch-dom'

// TODO: fonts

export const SearchInput = styled(SearchBox)`
  width: 800px;
  button {
    border: none;
    background: rgba(0, 0, 0);
    opacity: 0.9;
  }
  form {
    display: flex;
    background: url('/img/searchoutline.png') no-repeat center 0,
      url('/img/searchoutline-bottom.png') no-repeat center bottom;
    margin-bottom: 5px;
    width: 624px;
    justify-content: center;
    align-items: center;
  }

  input:focus {
    outline: none;
  }
  input {
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
width: 640px
border: 3px grey solid;
border-radius: 10px;
padding: 10px;
background: rgba(0, 0, 0);
opacity: 0.9;
margin-left: 50px;
overflow: hidden;
`

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
  box-shadow: -1px 1px 6px #000;

  :hover {
    opacity: 1;
    animation: glow 1.5s;
  }
  @keyframes glow {
    0% {
      transform: rotate(3deg);
    }
    20% {
      box-shadow: -10px 10px 17px rgba(105, 181, 100, 0.8);
      background: linear-gradient(
        221deg,
        rgba(20, 255, 0, 0.01) 72%,
        rgba(105, 181, 100, 1) 97%
      );
      transform: rotate(-3deg);
    }
    100% {
      opacity: 1;
    }
  }
`
