import React from 'react'
import Player from '../components/Player';

function Play() {
    const movie={url:"abcd.mp4",title:"abcd"}
    return (
        <div>
            <Player movie={movie}/>
        </div>
    )
}

export default Play
