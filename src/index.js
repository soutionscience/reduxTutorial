import React, {Component} from 'react'
import _ from 'lodash'
import ReactDom from 'react-dom'
import SearchBar from './componets/searchbar'
import YTSeach from 'youtube-api-search'
import VideoList from './componets/video_list'
import VideoDetail from './componets/video_detail'

const API_KEY ='AIzaSyDXwSw5W9W0_lBlRVZfN8Perb0RuHvkbeY'




class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      videos: [],
    selectedVideo: null
  }
  
  this.videoSearch('chelsea fc')
 
  }
  videoSearch(term){
    YTSeach({key: API_KEY, term: term}, (data)=>{
      this.setState({videos: data, selectedVideo: data[0]})
     })
      
  }

   render(){ 
     const videoSearch = _.debounce((term =>{this.videoSearch(term)}), 300) // delay search using loadash for 300 milli seconds
    
     return (
       
     <div>
    <SearchBar onSearchTermChange ={videoSearch}/>
    <VideoDetail video = {this.state.selectedVideo}/>
    <VideoList 
    onVideoSelect ={selectedVideo => this.setState({selectedVideo})}
     videos = {this.state.videos}/>
  </div>)
   }
}

ReactDom.render(<App/>, document.querySelector('.container'));