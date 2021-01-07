import React from "react";
import { Fab, Grid, Paper, Typography, Container } from "@material-ui/core";
import PlayIconButton from "@material-ui/icons/PlayArrow";
import Rating from "@material-ui/lab/Rating";
import classes from '../styles/MovieBigCard.module.css'


function MovieBigCard({ movie }) {
  return (
    <Container className={classes.root}>
      <Paper elevation={2} className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h2">
              {`${movie.title} (${movie.year})`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={10}>
                <Rating
                  className={classes.rating}
                  name="customized-10"
                  defaultValue={2}
                  max={10}
                  readOnly
                />
              </Grid>
              <Grid item xs={2}>
                <Fab color="secondary" classes={classes.playButton}>
                  <PlayIconButton />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={4}
            style={{ height: "100%", block: "3px black dotted" }}
          >
            <img className={classes.media} src={movie.pic} />
          </Grid>
          <Grid item xs={8}>
            <Typography className={classes.summary} variant="body1">
              {movie.summary}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default MovieBigCard;
