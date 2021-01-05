import {
  GridListTile,
  GridListTileBar,
  IconButton,
  Paper,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  media: { maxHeight: "240px", maxWidth: "200px" },
  card: {
    height: "20%",
    width: "60%",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 20%, " +
      "rgba(0,0,1,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  title: {
    color: theme.palette.secondary.light,
  },
}));

export default function MovieCard({ movie }) {
  const classes = useStyles();
  return (
    <Paper variant="outlined" className={classes.card}>
      <GridListTile>
        <img src={movie.pic} alt={movie.title} className={classes.media} />
        <GridListTileBar
          title={movie.title}
          subtitle={movie.year}
          actionIcon={
            <IconButton>
              <PlayArrowIcon />
            </IconButton>
          }
          classes={{ root: classes.titleBar, title: classes.title }}
        />
      </GridListTile>
    </Paper>
  );
}
