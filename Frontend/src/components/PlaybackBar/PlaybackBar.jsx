import React from 'react'
import "./PlaybackBar.css"
const PlaybackBar = () => {
    return (
        <div className='playbackbar'>
            <div className="left">
                <img src="" alt="" id='current_music'/>
                <div className="data_of_music">
                    <h4>0405 (2).MP3</h4>
                    <spa>
                        <span>Liam Vance</span>
                        <span>Chloe Sterling</span>
                    </spa>
                </div>
            </div>
            <div className="middle"></div>
            <div className="right"></div>
        </div>
    )
}

export default PlaybackBar
