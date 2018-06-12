import _ from 'lodash'; // same as: import Lodash from 'lodash'; //for throttling concept, lodash is required (install npm --save lodash)
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDZmN9dXfwvU0Vd2AZavCyyIXzNt4KFLXI';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo : null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term},  (videos) => {	// this param 'videos' can be 'data' or some other terms
		   this.setState({ 
		   		videos: videos,
		   		selectedVideo: videos[0]
		   });
		});
	}

	// 'videos' on LHS is props which is coming from App(parent compo)
    // Anytime the App renders, <VideoList /> will get new list of videos via {this.state.videos}

	render () {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
		  <div> 
			  <SearchBar onSearchTermChange={videoSearch}/>
			  <VideoDetail video={this.state.selectedVideo}/>
			  <VideoList 
			  	onVideoSelect={selectedVideo => this.setState({selectedVideo})}
			  	videos={this.state.videos} />
		  </div>
		);	
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));