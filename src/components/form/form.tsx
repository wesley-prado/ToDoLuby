import React, { useEffect } from 'react';
import { getUsernameFromLocalStorage, getDataFromLocalStorage } from '../../utils/getInfoFromLocalStorage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormContainer, ErrorText, FormInput, FormButton, ErrorContainer } from './style';
import { ToDoTypes } from './types';

type Props = {
  todoList: ToDoTypes[];
  setTodoList: React.Dispatch<React.SetStateAction<ToDoTypes[]>>;
};

const Form: React.FC<Props> = ({ todoList, setTodoList }) => {
  const todoSchema = Yup.object().shape({
    todo: Yup.string().required().min(5),
    description: Yup.string().required(),
    done: Yup.bool().default(false),
  });

  useEffect(() => {
    const username = getUsernameFromLocalStorage();
    localStorage.setItem('username', username);
    const doesItExists = getDataFromLocalStorage(username);
    if (!todoList.length && doesItExists.length > 0) {
      setTodoList(doesItExists);
    }
    localStorage.setItem(`todo-list#${username}`, JSON.stringify(todoList));
  }, [setTodoList, todoList]);

  return (
    <Formik
      initialValues={{ todo: '', description: '' }}
      validationSchema={todoSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={({ todo, description }, { setSubmitting }) => {
        if (!todoList.length) {
          setTodoList([{ todo, description, done: false }]);
        }
        const isValid = todoList.some((el) => el.todo === todo && el.description === description);
        if (!isValid) {
          const newArr = [...todoList, { todo, description, done: false }];
          console.log(newArr);
          setTodoList(newArr);
          setSubmitting(false);
        }

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
