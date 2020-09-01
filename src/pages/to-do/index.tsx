import React, { useMemo, useCallback, useState, useEffect } from 'react';
import Form from '../../components/form';
import { ListContainer, ToDoTitle, SortButton } from './style';
import { Container, Subtitle } from '../../shared/styles';
import { getUsernameFromLocalStorage } from '../../utils';
import List from '../../components/list';
import { TodoState } from '../../store/reducers/todoReducer';
import { useSelector } from 'react-redux';
import { organizeToIncomplete, organizeToCompleted } from '../../utils';

const ToDo: React.FC = () => {
  const [todos, setTodos] = useState<TodoState['todos']>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const todosFromContext = useSelector<TodoState, TodoState['todos']>((state) => state.todos);

  const updateTodos = useCallback(() => {
    setTodos(todosFromContext);
  }, [todosFromContext]);

  useEffect(() => {
    updateTodos();
  }, [updateTodos]);

  const username = useMemo(() => {
    return getUsernameFromLocalStorage();
  }, []);

  return (
    <Container>
      <ToDoTitle>{username}</ToDoTitle>
      <Subtitle>Write your tasks</Subtitle>
      <Form />
      <SortButton
        onClick={() => {
          if (isCompleted) {
            organizeToIncomplete(todos);
            setIsCompleted(false);
          } else {
            organizeToCompleted(todos);
            setIsCompleted(true);
          }
        }}
      >
        {isCompleted ? 'Sort to Completed' : 'Sort to Incomplete'}
      </SortButton>
      <ListContainer>
        {todos.length > 0 &&
          todos.map(({ todo, description, done }, i) => {
            return <List todo={todo} description={description} done={done} key={i} index={i} />;
          })}
      </ListContainer>
    </Container>
  );
};

export default ToDo;
