import React, { useState } from 'react';
import Router from 'next/router';

export default function AddTodo() {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description) {
      return;
    }
    try {
      await fetch('http://localhost:4000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: description }),
      });
      //setTodo(newTodo);
      setDescription('');
      Router.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-gray-100 border border-indigo-400 rounded-sm mr-2"
        />
        <button className="bg-indigo-600 px-3 py-1 rounded-sm text-white">
          Add Todo
        </button>
      </form>
    </div>
  );
}
