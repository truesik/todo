import React from 'react';
import {Link} from 'react-router';

const Todo = (props) => {
  const { id, title, isDone } = props.todo;
  const { onToggle, setCurrentTodo } = props;
  return (
    <li className="list-group-item" style={{textDecoration: isDone ? 'line-through' : 'none'}}>
      <Link to={`/todos/${title}`} onClick={() => setCurrentTodo(props.todo)}>{title}</Link>
      <a className="btn btn-primary btn-xs pull-right" onClick={() => onToggle(id)}>{isDone ? 'Undone' : 'Done'}</a>
    </li>
  );
};

Todo.propTypes = {
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  isDone: React.PropTypes.bool,
  onToggle: React.PropTypes.func.isRequired,
  setCurrentTodo: React.PropTypes.func.isRequired,
  todo: React.PropTypes.object
};

export default Todo;
