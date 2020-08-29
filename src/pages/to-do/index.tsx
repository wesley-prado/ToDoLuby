import React, { useState, useEffect } from 'react';
import Form from '../../components/form';
import { ListContainer, ToDoTitle } from './style';
import { Container, Subtitle, Button } from '../../shared/styles';
import List from '../../components/list';
import { ToDoTypes } from '../../components/form/types';
import { getUsernameFromLocalStorage, organizeToCompleted, organizeToIncomplete } from '../../utils/';

const ToDo: React.FC = () => {
  const [todoList, setTodoList] = useState<ToDoTypes[]>([]);
  const [username, setUsername] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!username.length) {
      setUsername(getUsernameFromLocalStorage());
    }
    setIsCompleted(JSON.parse(localStorage.getItem(`sort#${username}`) || 'false'));
  }, [username]);

  function complete(i: number): boolean {
    const tempArr = todoList;
    const { todo, description, done } = todoList[i];
    tempArr.splice(i, 1, { todo, description, done: !done });
    setTodoList([...tempArr]);

    return done;
  }

  return (
    <Container>
      <ToDoTitle>{username}</ToDoTitle>
      <Subtitle>Write your tasks</Subtitle>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Button
        onClick={() => {
          isCompleted
            ? organizeToIncomplete(todoList, setTodoList, setIsCompleted)
            : organizeToCompleted(todoList, setTodoList, setIsCompleted);
          localStorage.setItem(`sort#${username}`, JSON.stringify(!isCompleted));
        }}
      >
        {isCompleted ? 'Sort to Incomplete' : 'Sort to Completed'}
      </Button>
      <ListContainer>
        {todoList.length > 0 &&
          todoList.map(({ todo, description, done }, i) => {
            return <List todo={todo} description={description} done={done} key={i} complete={() => complete(i)} />;
          })}
      </ListContainer>
    </Container>
  );
};

export default ToDo;
