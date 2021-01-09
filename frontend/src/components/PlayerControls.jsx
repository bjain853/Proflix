import React, { forwardRef } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Fullscreen from "@material-ui/icons/Fullscreen";
import PlayArrow from "@material-ui/icons/PlayArrow";
import FastRewind from "@material-ui/icons/FastRewind";
import FastForward from "@material-ui/icons/FastForward";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Pause from "@material-ui/icons/Pause";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Bookmark from "@material-ui/icons/Bookmark";
import VolumeOff from "@material-ui/icons/VolumeOff";
import classes from "../styles/Player.module.css";
import PrettoSlider from "./PrettoSlider";

const useStyles = makeStyles((theme) => ({
  playBackSelected: {
    color: theme.palette.secondary.light,
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PlayerControls = (
  {
    handleClose,
    handlePopover,
    id,
    open,
    anchorEl,
    PlayBackRates,
    handlePlayPause,
    playing,
    onForward,
    onRewind,
    onMute,
    muted,
    onVolumeChange,
    onVolumeSeekUp,
    volume,
    onPlaybackRateChange,
    playbackRate,
    onToggleFullScreen,
    played,
    onSeek,
    onSeekMouseUp,
    onSeekMouseDown,
    elapsedTime,
    totalDuration,
    title,
    onChangeDisplayFormat,
    onBookmark,
  },
  ref
) => {
  const styles = useStyles();
  return (
    <div className={classes.controlsWrapper} ref={ref}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{ padding: 1 }}
      >
        <Grid item>
          <Typography variant="h5" className={classes.videoTitle}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={onBookmark} variant="contained" color="secondary">
            <Bookmark />
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-around"
      >
        <IconButton onClick={onRewind}>
          <FastRewind className={classes.controlIcon} />
        </IconButton>
        <IconButton onClick={handlePlayPause}>
          {playing ? (
            <PlayArrow className={classes.controlIcon} />
          ) : (
            <Pause className={classes.controlIcon} />
          )}
        </IconButton>
        <IconButton onClick={onForward}>
          <FastForward className={classes.controlIcon} />
        </IconButton>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={12}>
          <PrettoSlider
            min={0}
            max={100}
            defaultValue={20}
            ValueLabelComponent={(props) => (
              <ValueLabelComponent {...props} value={elapsedTime} />
            )}
            value={played * 100}
            onChange={onSeek}
            onMouseDown={onSeekMouseDown}
            onChangeCommitted={onSeekMouseUp}
          />
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <IconButton onClick={handlePlayPause}>
                {playing ? (
                  <PlayArrow fontSize="large" className={classes.bottomIcon} />
                ) : (
                  <Pause fontSize="large" className={classes.bottomIcon} />
                )}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={onMute}>
                {muted ? (
                  <VolumeOff fontSize="large" className={classes.bottomIcon} />
                ) : (
                  <VolumeUp fontSize="large" className={classes.bottomIcon} />
                )}
              </IconButton>
            </Grid>
            <Grid item>
              <Button onClick={onChangeDisplayFormat} varaint="text">
                <Typography style={{ color: "#fff" }}>
                  {`${elapsedTime}/${totalDuration}`}
                </Typography>
              </Button>
            </Grid>
            <Grid item className={classes.volumeSliderContainer}>
              <PrettoSlider
                min={0}
                max={100}
                defaultValue={20}
                value={volume * 100}
                onChangeCommitted={onVolumeSeekUp}
                onChange={onVolumeChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={handlePopover}
            variant="text"
            style={{ marginLeft: "65rem" }}
          >
            <Typography varaint="h4" style={{ color: "#fff" }}>
              {`${playbackRate}x`}
            </Typography>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Grid container direction="column-reverse">
              {PlayBackRates.map((rate) => (
                <Button
                  variant="text"
                  onClick={() => onPlaybackRateChange(rate)}
                >
                  <Typography
                    color={rate === playbackRate ? "secondary" : "#fff"}
                  >
                    {rate}
                  </Typography>
                </Button>
              ))}
            </Grid>
          </Popover>
        </Grid>
        <Grid item>
          <IconButton
            onClick={onToggleFullScreen}
            style={{ marginRight: "5rem" }}
          >
            <Fullscreen fontSize="large" style={{ color: "#fff" }} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default forwardRef(PlayerControls);
