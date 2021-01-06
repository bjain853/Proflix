import React from "react";
import { Fab, Grid, Paper, Typography, Container } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PlayIconButton from "@material-ui/icons/PlayArrow";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {
    marginTop: "10rem",
    width: "100%",
    justifyItems: "center",
  },
  container: {
    width: "100%",
    padding: "1.5rem",
  },
  media: {
    height: "80%",
    width: "80%",
    float: "left",
    margin: "1.2rem",
  },
  summary: {
    marginTop: "1rem",
  },
  title: {
    marginLeft: "2rem",
  },
  rating: {
    marginLeft: "2rem",
    marginTop: "1.5rem",
  },
  playButton: {
    marginLeft: "4rem",
  },
});

function MovieBigCard({ movie }) {
  const classes = useStyles();
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
