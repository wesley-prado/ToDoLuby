import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {HomeSubtitle, HomeTitle, HomeText, HomeInput, HomeContainer, HomeButton,HomeLogo } from './style'


const Home: React.FC = ()=>{
  const [username, setUsername] = useState('')
  const history = useHistory()
  const handleSubmit = ()=>{
    localStorage.setItem('username', username)
    return (
      history.push('/todo')
    )
  }

  return (
    <HomeContainer>
      <HomeLogo/>
      <HomeTitle>ToDoLuby</HomeTitle>
      <HomeSubtitle>A simple To Do List to organize what you have to accomplish during the day.</HomeSubtitle>
      <HomeText>Create a profile</HomeText>
        <HomeInput type="text" onChange={(e)=>setUsername(e.target.value)}/>
        <HomeButton onClick={handleSubmit}>Let's go!</HomeButton>
    </HomeContainer>
  )
}

export default Home
