import React from "react";
import ReactPlayer from "react-player/lazy";
import classes from "../styles/Player.module.css";
import {
  Grid,
  Typography,
  Container,
  Button,
  IconButton,
  Tooltip,
  Slider,
} from "@material-ui/core";
import {
  PlayArrow,
  FastForward,
  FastRewind,
  Pause,
  VolumeUp,
  Bookmark,
  Fullscreen,
} from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PrettoSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
}))(Slider);

function Player() {
  return (
    <Container
      maxWidth="xl"
      style={{
        marginTop: "4rem",
        height: "92vh",
        width: "100%",
      }}
    >
      <div className={classes.playerWrapper}>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url="https://www.youtube.com/watch?v=r6qWEteVMyM"
        />
        <div className={classes.controlsWrapper}>
          <Grid container justify="space-between" style={{ padding: 1 }}>
            <Grid item>
              <Typography variant="h2" className={classes.videoTitle}>
                Title
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                <Bookmark />
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" justify="center">
            <IconButton>
              <FastRewind className={classes.controlIcon} />
            </IconButton>
            <IconButton>
              <PlayArrow className={classes.controlIcon} />
            </IconButton>
            <IconButton>
              <Pause className={classes.controlIcon} />
            </IconButton>
            <IconButton>
              <FastForward className={classes.controlIcon} />
            </IconButton>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ border: "3px green solid" }}
          >
            <Grid item xs={12}>
              <PrettoSlider
                min={0}
                max={100}
                defaultValue={20}
                ValueLabelComponent={ValueLabelComponent}
              />
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justify="space-between"
                style={{ border: "3px green solid" }}
              >
                <Grid item>
                  <IconButton>
                    <PlayArrow
                      className={classes.bottomIcon}
                      fontSize="large"
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <VolumeUp fontSize="large" className={classes.bottomIcon} />
                  </IconButton>
                </Grid>
                <Grid item className={classes.volumeSliderContainer}>
                  <PrettoSlider
                    min={0}
                    max={100}
                    defaultValue={20}
                    styles={{ color: "primary" }}
                  />
                </Grid>
                <Grid item>
                  <Typography style={{ color: "#fff", marginLeft: "32" }}>
                    05:05
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>1X</Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default Player;
