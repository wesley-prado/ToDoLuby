import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, Title, Button } from '../../shared/styles'
import { HomeSubtitle, HomeContainer, HomeLogo, HomeText } from './style'

const Home: React.FC = () => {
  const [username, setUsername] = useState('')
  const history = useHistory()
  const handleSubmit = () => {
    localStorage.setItem('username', username)
    return history.push('/todo')
  }

  return (
    <HomeContainer>
      <HomeLogo />
      <Title>ToDoLuby</Title>
      <HomeSubtitle>
        A simple To Do List to organize what you have to accomplish during the
        day.
      </HomeSubtitle>
      <HomeText>Create a profile</HomeText>
      <Input type="text" onChange={(e) => setUsername(e.target.value)} />
      <Button onClick={handleSubmit}>Let's go!</Button>
    </HomeContainer>
  )
}

export default Home
