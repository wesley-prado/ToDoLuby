import React, {useState} from 'react'
import Form from '../../components/form/Form'
import {ListContainer, SortButton} from './style'
import { Container, Subtitle } from '../../shared/styles'
import List from '../../components/list/List'
import {ToDoTypes} from '../../components/form/types'
import { getUsernameFromLocalStorage } from '../../utils/getInfoFromLocalStorage'
import {handleSortCompleted,handleSortIncomplete} from '../../utils/sort'

const ToDo: React.FC = () => {
  const [todoList, setTodoList] = useState<ToDoTypes[]>([])
  const [toCompleted, setToCompleted] = useState(true)

  function handleDone(i:number): boolean{
    const isDone = todoList[i].done = !todoList[i].done
    const username = getUsernameFromLocalStorage()
    localStorage.setItem(`todo-list#${username}`, JSON.stringify(todoList))
    return isDone
  }

  return (
    <Container>
      <Subtitle>Write your tasks</Subtitle>
      <Form todoList={todoList} setTodoList={setTodoList}/>
      <SortButton onClick={()=>{
        toCompleted ? handleSortIncomplete(todoList,setToCompleted) : handleSortCompleted(todoList,setToCompleted)
      }}>Sort by {toCompleted ? "Incomplete" : "Completed"}</SortButton>
      <ListContainer>
      {todoList.length !== 0 && todoList.map(({todo, description, done}, i)=>{
        return (
          <List todo={todo} description={description} done={done} key={i} complete={()=> handleDone(i)}/>
        )
      })}
      </ListContainer>
    </Container>
  )
}

export default ToDo
