// import React from "react";
// import { useParams } from 'react-router';
// import MovieDetails from "../components/movieDetails/";
// import PageTemplate from "../components/templateMoviePage";
// import { getReccomendation } from '../api/tmdb-api'
// import { useQuery } from '@tanstack/react-query';
// import Spinner from '../components/spinner'


// const ReccomendationPage = (props) => {
//   const { id } = useParams();
//   const { data: movie, error, isPending, isError  } = useQuery({
//     queryKey: ['reccomendation', {id: id}],
//     queryFn: getReccomendation,
//   })

//   if (isPending) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }

//   return (
//     <>
//       {movie ? (
//         <>
//           <PageTemplate movie={movie}>
//             <MovieDetails movie={movie} />
//           </PageTemplate>
//         </>
//       ) : (
//         <p>Waiting for reccomendation details</p>
//       )}
//     </>
//   );
// };

// export default ReccomendationPage;
