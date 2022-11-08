import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-blue-100 p-10 flex space-x-5 border-b-2 border-white">
      <Link href="/">
        <button className="border-2 p-2 rounded-lg border-white bg-blue-200">
          HOME
        </button>
      </Link>
      <Link href="/todos">
        <button className="border-2 p-2 rounded-lg border-white bg-blue-200">
          TODOS
        </button>
      </Link>
      <Link href="/search">
        <button className="border-2 p-2 rounded-lg border-white bg-blue-200">
          SEARCH
        </button>
      </Link>
    </header>
  );
}

export default Header;
