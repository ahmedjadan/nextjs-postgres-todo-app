import { useState, useEffect } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Router from 'next/router'
export default function Home() {
  const [todos, setTodo] = useState([]);
console.log(Router)
  const getAllTodos = async () => {
    const todosList = await fetch('http://localhost:4000/api/todos');
    const data = await todosList.json();
    if (data) {
      setTodo(data);
     
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const onDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/todos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setTodo(todos.filter((t) => t.todo_id != id));
    } catch (error) {}
  };
  console.log(todos);
  return (
    <div className="max-w-2xl mx-auto mt-16">
      <div>
        <AddTodo />
        <TodoList todos={todos} onDelete={onDelete} />
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const todos = await fetch('http://localhost:4000/api/todos');
//   const data = await todos.json();
//   return {
//     props: { todos: data },
//   };
// }
