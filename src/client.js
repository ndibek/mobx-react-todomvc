import 'todomvc-common';
import TodoStore from './stores/TodoStore';
import ViewStore from './stores/ViewStore';
import TodoApp from './components/todoApp.js';
import React from 'react';
import ReactDOM from 'react-dom';

import NewTodoApp from "./components/todoApp";

const initialState = window.initialState && JSON.parse(window.initialState) || {};

let todoStore = TodoStore.fromJS(initialState.todos || []);
let viewStore = new ViewStore();

todoStore.subscribeServerToStore();

ReactDOM.render(
  <TodoApp todoStore={todoStore} viewStore={viewStore} />,
	document.getElementById('todoapp')
);

if (module.hot) {
  module.hot.accept('./components/todoApp', () => {
    ReactDOM.render(
      <NewTodoApp todoStore={todoStore} viewStore={viewStore} />,
      document.getElementById('todoapp')
    );
  });
}

