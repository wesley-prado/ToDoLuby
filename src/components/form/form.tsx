import React from 'react'
import {Formik} from 'formik'
import {Container} from '../../shared/styles'
import * as Yup from 'yup'

const Form: React.FC = ()=>{
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
    <Container>
        <Formik
          initialValues={{todo:'', description:''}}
          validationSchema={todoSchema}
          onSubmit={(values, {setSubmitting})=>{
            const name = localStorage.getItem('username' || '')
            localStorage.setItem(`todo-list-username#${name}`, JSON.stringify(values))
            setSubmitting(false)
          }}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              isSubmitting
            })=>(
              <form onSubmit={handleSubmit}>
                {errors.todo || errors.description}
                <input
                  type="text"
                  name="todo"
                  onChange={handleChange}
                  value={values.todo}/>
                  <input
                    type="text"
                    name="todo"
                    onChange={handleChange}
                    value={values.description}/>
                  <button type="submit" disabled={isSubmitting}>Let's go!</button>
              </form>
            )}
          </Formik>
      </Container>
  )
}

export default Form