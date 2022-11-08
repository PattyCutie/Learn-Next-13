import React from "react";
import Search from "./Search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex space-x-4 bg-slate-200 divide-x-4 divide-gray-300 p-5">
      <div className="">
        <h1 className="p-5 bg-purple-200 rounded-lg border-white border-2">
          SEARCH...
        </h1>
      </div>
      <div className="flex-1 p-5 space-y-2">
        {/*@ts-ignore*/}
        <Search />
        <div className="">{children}</div>
      </div>
    </main>
  );
}
