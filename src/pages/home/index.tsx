import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/actions/addUser';
import { saveUsername } from '../../utils';
import { Input, Button, Title } from '../../shared/styles';
import { HomeContainer, HomeLogo, HomeSubtitle, HomeText } from './style';

const Home: React.FC = () => {
  const [username, setUsername] = useState('Human Being');
  const history = useHistory();
  const dispatch = useDispatch();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setUsername(e.target.value);
  }
  function handleSubmit(): void {
    saveUsername(username);
    dispatch(addUser(username));
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
