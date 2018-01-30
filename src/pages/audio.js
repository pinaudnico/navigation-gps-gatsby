import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Audio extends React.Component {

	render() {

		return (	
			<div>
		        <div className="audio"><b>Module Audio</b></div>	
		        <div>
		        <ReactAudioPlayer
  				src='../son/son.ogg'
  				autoPlay
  				controls
				/>
				</div>  
			</div> 		
			)
	}
}



export default Audio;