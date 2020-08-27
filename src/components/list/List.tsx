import React, {useState} from 'react'
import {ToDoTypes} from '../form/types'
import {ListTitle, ListText, TodoContainer} from './style'

type Props = ToDoTypes & {
  complete: () => boolean
}

const List: React.FC<Props> = ({todo, description, done, complete})=>{
  const [isDone, setIsDone] = useState(done)

  return(
    <TodoContainer>
      <ListTitle onClick={()=>{
        setIsDone(complete())
      }}>{todo}</ListTitle>
      <ListText>{description}</ListText>
      {isDone && <p>done</p>}
    </TodoContainer>
  )
}

export default List