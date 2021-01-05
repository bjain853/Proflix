import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MovieCard from "./MovieCard";
import { GridList, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop:"2rem" ,
    display: "flex",
    overflowX: "hidden", //horizontal
    overflowY: "hidden", //vertical
    background: theme.palette.background.paper,
  },
  media: {
    padding: "3rem",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    overflowX:"auto",
  },
  genre:{
    marginLeft:"2rem",
    textWeight:"800",
  }
}));

export default function MovieRow({ movieObj }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Typography className={classes.genre} variant="h3">{movieObj.genre}</Typography>
        <GridList className={classes.gridList} cols={2.5}>
          {movieObj.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </GridList>
      </Grid>
    </div>
  );
}
