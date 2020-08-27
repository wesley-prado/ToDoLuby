import styled from 'styled-components'
import {Button} from '../../shared/styles'

export const ListContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  flex-wrap:nowrap;
  height:55vh;
  width: 35vw;
  min-width:400px;
  overflow-y:scroll;
  overflow-x:scroll;
  background-color: #eee;
  border-radius: 5px;
  padding:15px;
`
export const SortButton = styled(Button)`
  min-width:400px;
  margin-bottom:15px;
`