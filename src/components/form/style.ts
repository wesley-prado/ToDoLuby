import styled from 'styled-components'
import { Text, Input, Button } from '../../shared/styles'

export const FormContainer = styled.div`
  display:flex;
  flex-direction: column;
  min-width: 400px;
`
export const ErrorText = styled(Text)`
  text-align:center;
  color: crimson;
  font-weight:bold;
`
export const FormInput = styled(Input)`
  min-width:400px;
`
export const FormButton = styled(Button)`
  min-width:400px;
`
export const ErrorContainer = styled.div`
  height:50px;
`