import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as todoActions from '../../actions/todoActions';

import {Todo} from '../../components';

class TodoBox extends React.Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    setCurrentTodo: PropTypes.func.isRequired,
    todoList: PropTypes.array
  };

  handleSubmit(event) {
    event.preventDefault();
    const title = ReactDOM.findDOMNode(this.refs.title);
    const description = ReactDOM.findDOMNode(this.refs.description);
    if (title.value.trim().length > 0) {
      const todo = {
        title: title.value,
        description: description.value
      };
      this.props.add(todo);
      title.value = '';
      description.value = '';
    }
  }

  render() {
    const {todoList, toggle, setCurrentTodo} = this.props;
    const todoListTemplate = todoList.map((todo, index) => {
      return (
        <Todo key={index} todo={todo} onToggle={toggle} setCurrentTodo={setCurrentTodo}/>
      );
    });
    return (
      <div className="container" ref="form">
        <div className="col-lg-offset-3 col-md-offset-3 col-sm-offset-1 col-xs-offset-1 col-lg-6 col-md-6 col-sm-8 col-xs-8">
          <div className="panel panel-default">
            <div className="panel-heading">Todo List</div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" id="title" placeholder="Title" ref="title"/>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input type="text" className="form-control" id="description" placeholder="Description" ref="description"/>
                </div>
                <button className="btn btn-primary pull-right" onClick={(event) => ::this.handleSubmit(event)}>Add</button>
              </form>
            </div>
            <ul className="list-group">
              {todoListTemplate}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: bindActionCreators(todoActions.add, dispatch),
    toggle: bindActionCreators(todoActions.toggle, dispatch),
    setCurrentTodo: bindActionCreators(todoActions.setCurrentTodo, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoBox);
