import React from "react";
import { PageProps, SearchResult } from "../../../../typings";

const search = async (searchItem: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchItem}&api_key=${process.env.API_KEY}`
  );

// test error handling
  //throw new Error("Somthing went wrong !!!!!!!")
  const searchData: SearchResult = await res.json();
  return searchData;
};

async function SearchResults({ params: { searchItem } }: PageProps) {
  const searchResults = await search(searchItem);

  return (
    <div>
      <h2 className="border-white border-2 rounded-lg p-2">You search for: {searchItem}</h2>
      <ol className="space-y-2 p-2">
        {searchResults.organic_results.map((result) => (
          <li key={result.position} className="list-decimal p-2">
            <p className="font-bold underline">{result.title}</p>
            <p className="border-2 border-cyan-600 p-2 rounded-lg">{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;
