"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-orange-200 p-10 space-x-2 space-y-2 rounded-lg"
    >
      <input
        className="rounded-lg outline-none p-2 focus:border-b-4 focus:border-b-orange-400"
        placeholder="Search Anything ..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="py-2 px-4 border-2 rounded-lg bg-orange-400"
        type="submit"
      >
        SEARCH
      </button>
    </form>
  );
}

export default Search;
