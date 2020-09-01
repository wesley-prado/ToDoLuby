import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormContainer, ErrorText, FormInput, FormButton, ErrorContainer } from './style';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions/addTodo';

const Form: React.FC = () => {
  const todoSchema = Yup.object().shape({
    todo: Yup.string().required().min(5),
    description: Yup.string().required(),
    done: Yup.bool().default(false),
  });
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ todo: '', description: '', done: false }}
      validationSchema={todoSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={({ todo, description, done }, { setSubmitting }) => {
        dispatch(addTodo(todo, description, done));
        setSubmitting(false);
      }}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <label htmlFor="todo">To Do</label>
            <FormInput
              type="text"
              name="todo"
              onChange={handleChange}
              value={values.todo}
              onKeyPress={(e) => {
                if (e.keyCode === 13) {
                  handleSubmit();
                }
              }}
            />
            <label htmlFor="description">Description</label>
            <FormInput
              type="text"
              name="description"
              onChange={handleChange}
              value={values.description}
              onKeyPress={(e) => {
                if (e.keyCode === 13) {
                  handleSubmit();
                }
              }}
            />
            <FormButton type="submit" disabled={isSubmitting}>
              Save
            </FormButton>
            <ErrorContainer>
              <ErrorText>{errors.todo || errors.description}</ErrorText>
            </ErrorContainer>
          </FormContainer>
        </form>
      )}
    </Formik>
  );
};

export default Form;
