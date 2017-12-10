import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Todo from './Todo';

const TodoList = ({todos, deleteTodo, toggleComplete, type}) => {
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case 'All':
        return todos;
      case 'Complete':
        return todos.filter((t) => t.complete);
      case 'Active':
        return todos.filter((t) => !t.complete);
    }
  };
  todos = getVisibleTodos(todos, type);
  todos = todos.map((todo, i) => {
    return <Todo key={i} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>;
  });
  return <View>{todos}</View>;
};

export default TodoList;
