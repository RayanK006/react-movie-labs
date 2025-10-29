import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist"

const UpcomingMoviesPage = (props) => {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['upcomingMovies'],
    queryFn: getUpcomingMovies,
  });

    const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };


  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data.results;

  const playlists = movies.filter(m => m.playlist)
  localStorage.setItem('playlist', JSON.stringify(playlists))
  const addToPlaylist = (movieId) => true 
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
       action={(movie) => {
          return <AddToPlaylistIcon movie={movie} />
        }}
/>
  );
};

export default UpcomingMoviesPage;