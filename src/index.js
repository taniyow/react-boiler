import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCQNrhNGcH7fJaSPAre9QL2H-fE67xwjA8';

// Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideos: videos[0],
            });
        });
        // this works if the function(videos) and the key value
        // on setState is the same ({ videos: videos })
        
        // YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
        //     this.setState({ videos: data });
        // })
    }

    render () {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} /> 
                {/* videos={this.state.videos} is a passing props */}
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(
    <App/>
, document.querySelector('.container'));