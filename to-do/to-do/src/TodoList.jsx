import React from 'react';
import TodoItem from './TodoItem';


export const TodoList = (props) => {
  return(
    <div>
      <ul>
        {props.todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            deleteTodo={() => props.removeTodo(index)}
            updateTodo={(newTodo) => props.editTodo(newTodo,index)}
            index={index}/>
        ))
      }
    </ul>
  </div>
);
};
