import React from "react";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const PopularPage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['popular'],
    queryFn: getPopularMovies,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results;

   return (
      <PageTemplate
        title="Popular Movies"
        movies={movies}
        action={(movie) => null}
      />
  );
};
export default PopularPage;
