import React from 'react'
import ReactPlayer from 'react-player/lazy'
import classes from '../styles/Player.module.css';
import {Grid} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';


function Player() {
    return (
        <div className={classes.playerWrapper}>
            <ReactPlayer width={"100%"} height={"100%"}/>
            <div className={classes.controlsWrapper}>
            </div>
        </div>
    )
}

export default Player
