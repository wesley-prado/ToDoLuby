import styled from 'styled-components'
import {Subtitle, Title, Text, Container, Input, Button, Logo} from '../../shared/styles'

export const HomeTitle = styled(Title)`
  text-align: center;
`
export const HomeSubtitle = styled(Subtitle)`
  margin-top:30px;
`
export const HomeText = styled(Text)`
  margin:30px 0;
`
export const HomeContainer = styled(Container)`
  display:flex;
  flex-direction:column;
  align-items:center;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  height: fit-content;
  padding-top:200px;
  padding-bottom:200px;
  border-radius:5px;
`
export const HomeInput = styled(Input)`

`
export const HomeButton = styled(Button)`
  margin-top:30px;
  width: 35vw;
`

export const HomeLogo = styled(Logo)`
  position:absolute;
  top:30px;
  left:50%;
  transform: translateX(-50%);
  height:150px;
  width:150px;
`
