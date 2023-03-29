import CategoriesLoading from "@/componets/categories/loading";
import MovieInfoLoading from "@/componets/movie-info/loading";
import MovieSectionLoading from "@/componets/movies-section/loading";
import React from "react";

export default function PageLoading() {

  return (
    <div>
      <MovieInfoLoading />
      <CategoriesLoading />
      <MovieSectionLoading />
    </div>
  );
}
