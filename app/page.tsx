import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

export default function page() {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-3xl p-10 font-bold underline text-red-500">
        Hello TOP LEVEL* Homepage !!
      </h1>
      <p className="border-b-2">
        Basically we have 1 top homepage like this page and every route have
        it's homepage or index page but if all the routes are grouping in folder
        (group-name) we can only have one* top HOME PAGE file !!{" "}
      </p>
      <h2 className="text-2xl p-10 font-bold underline text-red-500">
        {" "}
        Here is Bonus in this lesson ! **React Suspense Boundaries **
      </h2>
      <p className="p-5 border-b-2">considering these components below **</p>

      <div className="flex flex-col space-y-4 mt-2 p-4 bg-sky-300">
        <Suspense
          fallback={<p className="text-green-600">1st TODOS is loading ...</p>}
        >
          <h4 className="text-green-800 bg-white p-2 w-fit rounded-lg">
          1st Todos is ready
          </h4>
          <div className="flex flex-wrap gap-2 space-x-2">
            {/*@ts-ignore*/}
            <TodosList />
          </div>
        </Suspense>

        <Suspense
          fallback={<p className="text-pink-600">2nd TODOS is loading ...</p>}
        >
          <h4 className="text-pink-800 bg-white p-2 w-fit rounded-lg">
             2st Todos is ready
          </h4>
          <div className="flex flex-wrap gap-2 space-x-2">
            {/*@ts-ignore*/}
            <TodosList />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
