import React from 'react';

export default function TodoList({ todos, onDelete }) {
  
  return (
    <>
      <h1>Todo</h1>
      {todos?.map((todo) => (
        <div
          key={todo.todo_id}
          className="flex items-center justify-between space-x-4 space-y-3 border-b py-1"
        >
          <p className="flex-1 ">{todo.description}</p>
          <button className=" bg-green-500 text-white p-2 rounded">
            Edite
          </button>
          <button
            className=" bg-red-700 text-white p-2 rounded"
            onClick={() => onDelete(todo.todo_id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
