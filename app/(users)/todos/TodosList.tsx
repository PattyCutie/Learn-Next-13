import Link from "next/link";
import React from "react";
import { Todo } from "../../../typings";

const fetchTodos = async () => {
  //set timeout to test suspense
  //timeout for random number of seconds between 10 and 1
  const timeout = Math.floor(Math.random() * 10 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/?_limit=10"
  );
  const todos: Todo[] = await res.json();

  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id} className="p-4 border-white border-2 bg-red-200">
          <Link href={`/todos/${todo.id}`}>Todo : {todo.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodosList;
