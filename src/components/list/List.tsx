import React, { useState, useEffect, memo } from 'react';
import { ToDoTypes } from '../form/types';
import { ListTitle, ListText, TodoContainer } from './style';

type Props = ToDoTypes & {
  complete: () => boolean;
};

const List: React.FC<Props> = ({ todo, description, done, complete }) => {
  const [isDone, setIsDone] = useState(done);

  useEffect(() => {
    setIsDone(done);
  }, [done]);

  return (
    <TodoContainer>
      <ListTitle
        onClick={() => {
          setIsDone(complete());
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
