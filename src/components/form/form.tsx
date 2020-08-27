import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { FormContainer, ErrorText,FormInput, FormButton, ErrorContainer } from './style'
import {ToDoTypes} from './types'

type Props = {
  todoList: ToDoTypes[],
  setTodoList: React.Dispatch<React.SetStateAction<ToDoTypes[]>>
}

const Form: React.FC<Props> = ({todoList, setTodoList}) => {
  const [username, setUsername] = useState('')
  const todoSchema = Yup.object().shape({
    todo: Yup
      .string()
      .required()
      .min(5),
    description: Yup
      .string()
      .required(),
    done: Yup
      .bool()
      .default(false)
  })

  useEffect(()=>{
    const username = localStorage.getItem('username') || 'Human Being'
    setUsername(username)
    const doesItExists = JSON.parse(localStorage.getItem(`todo-list#${username}` )|| '[]')
    if(todoList.length === 0 && doesItExists.length !== 0){
      setTodoList(doesItExists)
    }
    localStorage.setItem(`todo-list#${username}`, JSON.stringify(todoList))
  },[setTodoList, todoList, username])

  return (
    <Formik
      initialValues={{ todo: '', description: '', done: false }}
      validationSchema={todoSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, { setSubmitting }) => {
        if(!todoList){
          setTodoList([values])
        }
        const newArr = [...todoList, values]
        setTodoList(newArr)
        setSubmitting(false)
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <label htmlFor="todo">To Do</label>
            <FormInput
              type="text"
              name="todo"
              onChange={handleChange}
              value={values.todo}/>
              <label htmlFor="description">Description</label>
            <FormInput
              type="text"
              name="description"
              onChange={handleChange}
              value={values.description}/>
            <FormButton type="submit" disabled={isSubmitting}>Save</FormButton>
            <ErrorContainer>
              <ErrorText>{ errors.todo || errors.description}</ErrorText>
            </ErrorContainer>
          </FormContainer>
        </form>
      )}
    </Formik>

  )
}

export default Form
