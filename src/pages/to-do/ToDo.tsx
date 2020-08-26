import React from 'react'
import Form from '../../components/form/Form'
import { Container, Text } from '../../shared/styles'

const ToDo: React.FC = () => {
  return (
    <Container>
      <Text>Write your tasks</Text>
      <Form />
    </Container>
  )
}

export default ToDo
