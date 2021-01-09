import React, { useRef } from "react";
import ReactPlayer from "react-player/lazy";
import classes from "../styles/Player.module.css";
import Container from "@material-ui/core/Container";
import PlayerControls from "./PlayerControls";
import screenfull from "screenfull";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Player({ movie }) {
  const [bookmarks, setBookmarks] = React.useState([]);
  const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [playerState, setState] = React.useState({
    playing: false,
    playbackRate: 1.0,
    muted: false,
    volume: 0.5,
    played: 0,
    seeking: false,
  });
  const [count, setCount] = React.useState(0);

  const PlayBackRates = [0.1, 0.5, 1.0, 1.5, 2];
  const { playing, muted, volume, playbackRate, played, seeking } = playerState;

  const PlayerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const controlsRef = useRef(null);

  const format = (seconds) => {
    if (isNaN(seconds)) {
      return "00:00";
    }
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  const handlePlayPause = () => {
    setState({ ...playerState, playing: !playerState.playing });
  };

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRewind = () => {
    PlayerRef.current.seekTo(PlayerRef.current.getCurrentTime() - 10);
  };

  const handleForward = () => {
    PlayerRef.current.seekTo(PlayerRef.current.getCurrentTime() + 10);
  };

  const handleMute = () => {
    setState({ ...playerState, muted: !playerState.muted });
  };

  const handleVolumeSeekUp = (event, newValue) => {
    const newVolume = parseFloat(newValue / 100);
    setState({ ...playerState, volume: newVolume, muted: newValue === 0 });
  };

  const handleVolumeChange = (event, newValue) => {
    const newVolume = parseFloat(newValue / 100);
    setState({ ...playerState, volume: newVolume, muted: newValue === 0 });
  };

  const handlePlaybackRateChange = (rate) => {
    setState({ ...playerState, playbackRate: rate });
  };

  const toggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current);
  };

  const handleProgress = (changeState) => {
    if (count > 3) {
      controlsRef.current.style.visibility = "hidden";
      setCount(0);
    }

    if (controlsRef.current.style.visibility == "visible") {
      setCount(count + 1);
    }

    if (!seeking) {
      setState({ ...playerState, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {
    setState({ ...playerState, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = () => {
    setState({ ...playerState, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    setState({ ...playerState, seeking: false });
    PlayerRef.current.seekTo(newValue / 100);
  };

  const handleChangeDisplayFormat = () => {
    if (timeDisplayFormat === "normal") {
      setTimeDisplayFormat("remaining");
    } else {
      setTimeDisplayFormat("normal");
    }
  };

  const addBookmark = () => {
    const canvas = canvasRef.current;
    canvas.height = 90;
    canvas.width = 160;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      PlayerRef.current.getInternalPlayer(),
      0,
      0,
      canvas.width,
      canvas.height
    );
    const imageUrl = canvas.toDataURL();
    canvas.width = 0;
    canvas.height = 0;
    setBookmarks([
      ...bookmarks,
      { time: currentTime, display: elapsedTime, image: imageUrl },
    ]);
  };

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = "visible";
    setCount(0);
  };

  const open = Boolean(anchorEl);
  const id = open ? "playbackRate-popover" : undefined;

  const currentTime = PlayerRef.current
    ? PlayerRef.current.getCurrentTime()
    : "00:00";
  const duration = PlayerRef.current
    ? PlayerRef.current.getDuration()
    : "00:00";
  const elapsedTime =
    timeDisplayFormat === "normal"
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;
  const totalDuration = format(duration);

  return (
    <Container
      maxWidth="large"
      style={{
        marginTop: "4rem",
        height: "90vh",
        width: "100%",
      }}
    >
      <div
        ref={playerContainerRef}
        className={classes.playerWrapper}
        onMouseMove={handleMouseMove}
      >
        <ReactPlayer
          ref={PlayerRef}
          width={"100%"}
          height={"100%"}
          url={movie.url}
          playing={playing}
          controls={false}
          muted={muted}
          volume={volume}
          playbackRate={playbackRate}
          onProgress={handleProgress}
          config={{
            file: {
              attributes: {
                crossOrigin: "anonymous",
              },
            },
          }}
        />
        <PlayerControls
          handlePopover={handlePopover}
          handleClose={handleClose}
          id={id}
          open={open}
          anchorEl={anchorEl}
          PlayBackRates={PlayBackRates}
          handlePlayPause={handlePlayPause}
          playing={playing}
          onRewind={handleRewind}
          onForward={handleForward}
          onMute={handleMute}
          muted={muted}
          onVolumeChange={handleVolumeChange}
          onVolumeSeekUp={handleVolumeSeekUp}
          volume={volume}
          playbackRate={playbackRate}
          onPlaybackRateChange={handlePlaybackRateChange}
          onToggleFullScreen={toggleFullScreen}
          played={played}
          onSeek={handleSeekChange}
          onSeekMouseDown={handleSeekMouseDown}
          onSeekMouseUp={handleSeekMouseUp}
          elapsedTime={elapsedTime}
          totalDuration={totalDuration}
          title={movie.title}
          onChangeDisplayFormat={handleChangeDisplayFormat}
          onBookmark={addBookmark}
          ref={controlsRef}
        />
      </div>
      <Grid container style={{ marginTop: 10 }} spacing={3}>
        {bookmarks.map((bookmark, index) => (
          <Grid item key={index}>
            <Paper onClick={() => PlayerRef.current.seekTo(bookmark.time)}>
              <img crossOrigin="anonymous" src={bookmark.image} />
              <Typography>Bookmark at {bookmark.display}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <canvas ref={canvasRef} />
    </Container>
  );
}

export default Player;
