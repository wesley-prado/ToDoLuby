import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Button, Title } from '../../shared/styles';
import { HomeContainer, HomeLogo, HomeSubtitle, HomeText } from './style';

const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const history = useHistory();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setUsername(e.target.value);
  }
  function handleSubmit(): void {
    username.length > 0
      ? localStorage.setItem('username', username)
      : localStorage.setItem('username', JSON.stringify('Human Being'));
    history.push('/todo');
  }
  return (
    <HomeContainer>
      <HomeLogo />
      <Title>ToDoLuby</Title>
      <HomeSubtitle>A simple To Do List to organize the tasks you have to accomplish during the day.</HomeSubtitle>
      <HomeText>Create a profile</HomeText>
      <Input
        type="text"
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            handleSubmit();
          }
        }}
      />
      <Button onClick={handleSubmit}>Let&apos;s go!</Button>
    </HomeContainer>
  );
};

export default Home;
