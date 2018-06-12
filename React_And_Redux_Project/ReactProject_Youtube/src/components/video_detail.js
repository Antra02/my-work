// video detail will only have list, url and desc.of the video. So we don't need to maintain any state here and hence functional component will do (no class-based compo needed)

import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div> Loading... </div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`; 		//Or ES5 'https://www.youtube.com/embed/' + videoId;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
  		</div>
	)};

export default VideoDetail;