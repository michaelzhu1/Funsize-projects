import React from 'react';

export const TodoItem = ({todo, deleteTodo}) => {
  return(
    <div>
      <li>{todo}</li>
      <button onClick={deleteTodo}>Delete Todo</button>
    </div>
  );
};
