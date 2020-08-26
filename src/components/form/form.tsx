import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Input, Button } from '../../shared/styles'
import { FormContainer } from './style'
// Arrumar o save do localStorage.
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

  return (
    <Formik
      initialValues={{ todo: '', description: '' }}
      validationSchema={todoSchema}
      onSubmit={(values, { setSubmitting }) => {
        const name = localStorage.getItem('username') || 'Human Being'
        setTodo([values])
        localStorage.setItem(`todo-list-username#${name}`, JSON.stringify(todo))
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
            {errors.todo || errors.description}
            <Input
              type="text"
              name="todo"
              onChange={handleChange}
              value={values.todo}/>
            <Input
              type="text"
              name="description"
              onChange={handleChange}
              value={values.description}/>
            <Button type="submit" disabled={isSubmitting}>Save</Button>
          </FormContainer>
        </form>
      )}
    </Formik>

  )
}

export default Form
