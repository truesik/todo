import * as actionTypes from '../constants/todosContants';

const uid = () => Math.random().toString(34).slice(2);

export const add = (todoForm) => {
  const todo = {
    id: uid(),
    title: todoForm.title,
    description: todoForm.description,
    startDate: new Date().toDateString(),
    finishDate: '',
    isDone: false
  };
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_TODO,
      payload: todo
    });
  };
};

export const toggle = (id) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.TOGGLE_TODO,
      payload: id
    });
  };
};

export const setCurrentTodo = (todo) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_CURRENT_TODO,
      payload: todo
    });
  };
};
