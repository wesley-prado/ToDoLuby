import React, {useState} from 'react'
import Form from '../../components/form/Form'
import { Container, Text } from '../../shared/styles'
import List from '../../components/list/List'
import {ToDoTypes} from '../../components/form/types'

const ToDo: React.FC = () => {
  const [todoList, setTodoList] = useState<ToDoTypes[]>([])
  
  return (
    <Container>
      <Text>Write your tasks</Text>
      <Form todoList={todoList} setTodoList={setTodoList}/>
      {todoList.length !== 0 && todoList.map((list, i)=>{
        return (
          <List todo={list} key={i}/>
        )
      })}
    </Container>
  )
}

export default ToDo
