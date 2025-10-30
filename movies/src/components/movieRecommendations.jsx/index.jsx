import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router";
import { getMovieRecommendation } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'

export default function MovieRecommendations({ movie }) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['recommendations', { id: movie.id }],
    queryFn: getMovieRecommendation,
  });
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const recommendations = data.results;

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="recommendations table">
        <TableHead>
          <TableRow>
            <TableCell >Title</TableCell>
            <TableCell align="justify">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recommendations.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.title}
              </TableCell>
              <TableCell >
              <Link
                  to={`/movies/${r.id}`} //url to link
                  state={{
                      reccomendation: r,
                      movie: movie,
                  }}
                >
                  Full Movie
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
