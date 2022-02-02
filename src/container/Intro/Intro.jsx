import React, { useRef, useState } from 'react';

import {BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handleVideo=()=>{
      setPlayVideo((prev)=>!prev);
      // playVideo ?videoRef.current.pause() :videoRef.current.play();
      if(playVideo) videoRef.current.pause()
      else videoRef.current.play();
  }

  return(
    <div className='app__video'>
      <video src={meal} type="video/mp4" loop controls={false} muted ref={videoRef} />
      <div className='app__video-overlay flex__center'>
        <div onClick={handleVideo} className='app__video-overlay_circle flex-center'>
            {playVideo ?<BsPauseFill color="#FFF" fontSize={30}  /> :<BsPlayFill color="#FFF" fontSize={30} /> }
        </div>
      </div>
    </div>
  ) 
 
};

export default Intro;
