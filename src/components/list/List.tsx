import React from 'react'
import {ToDoTypes} from '../form/types'

type Props = {
  todo: ToDoTypes
}

const List: React.FC<Props> = ({todo})=>{
  return(
    <>
      <h2>{todo.todo}</h2>
      <p>{todo.description}</p>
    </>
  )
}

export default List