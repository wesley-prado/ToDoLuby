import React, { useState, useEffect, memo } from 'react';
import { ToDoTypes } from '../form/types';
import { ListTitle, ListText, TodoContainer } from './style';
import { toggleDone } from '../../store/actions/toggleDone';
import { useDispatch } from 'react-redux';

type Props = ToDoTypes & {
  index: number;
};

const List: React.FC<Props> = ({ todo, description, done, index }) => {
  const [isDone, setIsDone] = useState(done);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsDone(done);
  }, [done]);

  return (
    <TodoContainer>
      <ListTitle
        onClick={() => {
          dispatch(
            toggleDone({
              todo: { todo, description, done: !done },
              index,
            }),
          );
          setIsDone(done);
        }}
      >
        {todo}
        {isDone && '★'}
      </ListTitle>
      <ListText>{description}</ListText>
      {isDone ? 'done' : 'undone'}
    </TodoContainer>
  );
};

export default memo(List);
