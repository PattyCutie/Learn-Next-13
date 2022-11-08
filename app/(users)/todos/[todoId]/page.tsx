import React from "react";
import { Todo } from "../../../typings";
import {notFound} from "next/navigation"


export const dynamicParams = true

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    //revalidate every 60 sec !
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);

  if (!todo.id) return notFound()

  return (
    <div className="p-10 bg-yellow-100 border-2 shadow-lg">
      <h4>TODO ITEM: #{todoId}</h4>
      <p>{todo.title}</p>
      <p>Completed: {todo.completed ? "YES" : "NO"}</p>
      <p className="border-t border-gray-500 mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/?_limit=10"
  );
  const todos: Todo[] = await res.json();

  // only prebuild 10 pages to avoid being rate limited by Demo API
  const trimedTodos = todos.splice(0, 10);

  return todos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
