import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { FormContainer, FormText,FormInput, FormButton } from './style'

type ToDo = {
  todo: string,
  description: string
}

const Form: React.FC = () => {
  const [todo, setTodo] = useState<ToDo[]>([])
  const todoSchema = Yup.object().shape({
    todo: Yup
      .string()
      .required()
      .min(5),
    description: Yup
      .string()
      .required()
  })

  useEffect(()=>{
    const username = localStorage.getItem('username') || ''
    const doesItExists = JSON.parse(localStorage.getItem(`todo-list#${username}` )|| '[]')
    if(todo.length === 0 && doesItExists.length !== 0){
      setTodo(doesItExists)
    }
    localStorage.setItem(`todo-list#${username}`, JSON.stringify(todo))
  },[todo])

  return (
    <Formik
      initialValues={{ todo: '', description: '' }}
      validationSchema={todoSchema}
      onSubmit={(values, { setSubmitting }) => {
        if(!todo){
          setTodo([values])
        }
        setTodo([...todo, values])
        setSubmitting(false)
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting
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
            <FormText>{errors.todo || errors.description}</FormText>
          </FormContainer>
        </form>
      )}
    </Formik>

  )
}

export default Form
