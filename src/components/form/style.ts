import styled from 'styled-components'
import { Text, Input, Button } from '../../shared/styles'

export const FormContainer = styled.div`
  display:flex;
  flex-direction: column;
  min-width: 400px;
`
export const FormText = styled(Text)`
  text-align: center;
`
export const FormInput = styled(Input)`
  min-width:400px;
`
export const FormButton = styled(Button)`
  min-width:400px;
`