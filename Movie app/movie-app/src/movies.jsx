import React from "react";
import Movie from "./Movie";
import movies from "./moviesList.json";

export default function Movies() {
  return (
    <div className="flex-wrap flex m-10    ">
      {movies.items.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}
