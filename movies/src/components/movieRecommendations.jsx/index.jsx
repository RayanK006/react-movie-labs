import React, { useEffect, useState }  from "react";
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

export default function MovieRecommendations({ movie }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getMovieRecommendation(movie.id).then((recommendations) => {
      setRecommendations(recommendations);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell >Title</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recommendations.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.title}
              </TableCell>
              <TableCell >{excerpt(r.content)}</TableCell>
              <TableCell >
              <Link
                  to={`/reccomendations/${r.id}`}
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
