import React from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const NowPlayingPage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['nowplaying'],
    queryFn: getNowPlayingMovies,
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
        title="Now Playing"
        movies={movies}
        action={(movie) => null}
      />
  );
};
export default NowPlayingPage;
