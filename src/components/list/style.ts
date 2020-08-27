import styled from 'styled-components'

export const ListTitle = styled.h2`
  cursor:pointer;
  margin-top: 15px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none; 
  -ms-user-select: none;
  user-select: none;
`
export const ListText = styled.h3`
  border-bottom:1px solid #333;
  text-align:center;
`
export const TodoContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  height:fit-content;
`
