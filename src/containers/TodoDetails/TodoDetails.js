import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as todoActions from '../../actions/todoActions';

class TodoDetails extends React.Component {
  static propTypes = {
    currentTodo: React.PropTypes.object,
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    startDate: React.PropTypes.string,
    finishDate: React.PropTypes.string,
    isDone: React.PropTypes.bool,
    toggle: React.PropTypes.func
  };

  render() {
    const {title, description, startDate, finishDate, isDone} = this.props.currentTodo;
    return (
      <div className="container">
        <div
          className="col-lg-offset-3 col-md-offset-3 col-sm-offset-1 col-xs-offset-1 col-lg-6 col-md-6 col-sm-8 col-xs-8">
          <div className="panel panel-default">
            <div className="panel-heading">Todo: {title}</div>
            <div className="panel-body">
              <p>Description: {description}</p>
              <p>Start Date: {startDate}</p>
              <p>Finish Date: {finishDate}</p>
              <p>Status: {isDone ? 'Done' : 'Undone'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
    currentTodo: state.todo.currentTodo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: bindActionCreators(todoActions.toggle, dispatch),
    setCurrentTodo: bindActionCreators(todoActions.setCurrentTodo, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetails);
