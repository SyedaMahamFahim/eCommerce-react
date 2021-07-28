
import React from 'react';
import './about.css'
import { Player } from 'video-react';
// import './video.css'
import 'video-react/dist/video-react.css';
<link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/>
const AboutVideo= props => {
   
  return (
    <Player
      playsInline
      className="about-video"
      style={{
        width: "50%",
        height: "500px",
        margin: "auto"
      }}
      poster="http://lezada.reactdemo.hasthemes.com/assets/images/backgrounds/about-video-bg.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};
export default AboutVideo