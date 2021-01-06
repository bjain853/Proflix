import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MovieCard from "./MovieCard";
import { GridList, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding:"0.3rem",
    display: "flex",
    overflowX: "visible", //horizontal
    overflowY: "visible", //vertical
    background: theme.palette.background.paper,

    marginTop:"2rem",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",  
  },
  genre: {
    marginLeft: "2rem",
    textWeight: "800",
    marginBottom:"1rem",
  },
}));

export default function MovieRow({ movieObj }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Typography className={classes.genre} variant="h3">
          {movieObj.genre}
        </Typography>
        <GridList cellHeight={180}  className={classes.gridList} cols={2.5}>
          {movieObj.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </GridList>
      </Grid>
    </div>
  );
}
