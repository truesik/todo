import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    TodoBox,
    TodoDetails
  } from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={TodoBox}/>
      <Route path="todos/:todo" component={TodoDetails}/>
    </Route>
  );
};
