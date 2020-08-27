import styled from 'styled-components'
import logo from './img/xadrez.svg'

export const Title = styled.h1`
  font-size:2em;
  font-weight:bold;
  color: #333;
`

export const Subtitle = styled.h2`
  font-size:1.5em;
  color: #333;
`
export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:95vw;
  padding: 40px;
  height:100vh;
  overflow:hidden;
  margin:0 auto;
  background-color: #f9f9f9;
  border: 1px solid transparent;
`
export const Text = styled.p`
  color: #333;
  font-size: 1.3em;
  letter-spacing:0.1em;
  margin-top:15px;
`

export const Input = styled.input` 
  width: 35vw;
  height:40px;
  padding:3px;
  margin-bottom:15px;
  border-radius: 5px;
  border:2px solid rgba(0,0,0,0.2);
  outline:none;
  transition: border .2s ease-in-out;
  font-size:1.2em;
  font-weight:500;
  &:focus{
    border: 2px solid skyblue;
    transition: border .2s ease-in-out;
  }
`
export const Button = styled.button`
  width:35vw;
  min-height:40px;
  border-radius:5px;
  color: #333;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 0.1em;
  outline:none;
  background-color: skyblue;
  color:#fff;
  border: 2px solid skyblue;
  &:active{
    filter:drop-shadow(0 0 1px grey)
  }
  &:hover{
    cursor:pointer;
  }
  &:invalid{
    border-color:red;
  }
`
export const Logo = styled.div`
  height:80px;
  width:80px;
  background-size:cover;
  background-image: url(${logo});
  background-repeat:no-repeat;
`
