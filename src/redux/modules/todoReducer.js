import * as actionTypes from '../../constants/todosContants';

const initialState = {
  todoList: [],
  currentTodo: undefined
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload)
      };
    case actionTypes.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
              finishDate: todo.isDone ? '' : new Date().toDateString()
            };
          }
          return todo;
        })
      };
    case actionTypes.SET_CURRENT_TODO:
      return {
        ...state,
        currentTodo: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default todoReducer;
