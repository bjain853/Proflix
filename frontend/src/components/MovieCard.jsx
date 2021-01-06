import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { GridListTile } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    overflowX: "hidden",
    height: "100%",
  },
  media: {
    maxHeight: 180,
    marginTop: "5px",
  },
  summary: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});

export default function MediaCard({ movie }) {
  const classes = useStyles();

  return (
    <GridListTile>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            src={movie.pic}
            title="Contemplative Reptile"
            component="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {movie.title}
            </Typography>
            <Typography gutterBottom variant="body1" component="h3">
              {movie.year}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.summary}
            >
              {movie.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary" variant="contained">
            Play Trailer
          </Button>
          <Button size="small" color="secondary" variant="contained">
            Watch Now
          </Button>
        </CardActions>
      </Card>
    </GridListTile>
  );
}
