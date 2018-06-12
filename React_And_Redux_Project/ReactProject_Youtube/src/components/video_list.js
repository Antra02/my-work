import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {	//the props from index.js <VideoList /> 'videos' will arrive here as arg 'props' object
	const videoItems = props.videos.map((video) => {
		return (

			<VideoListItem 
			  onVideoSelect={props.onVideoSelect}
			  key={video.etag} 
			  video={video} />
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
}

export default VideoList;