import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {			//(props) => {	//(props) and (1) is equivalent to just ({video}) here (ES6)
	//const video = props.video; //(1) old school, use ES6 instead
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>
				<div className="media-body">
					<div className="media-heading"> {video.snippet.title} </div>
				</div>
			</div>
		</li>
	  );
};

export default VideoListItem;