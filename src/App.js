import React, {Component, Fragment} from 'react';

import hash from "./components/hash";
import Spotify from "./components/Spotify";
import Repos from "./components/Repos";
import Bio from "./components/Bio";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from './components/Navbar';
import * as $ from 'jquery';


class App extends Component {

  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0,
      no_data: false,
      repos: [],
      img: ""
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }

  async componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
      console.log(_token);
    }

    // set interval for polling every 5 seconds
    this.interval = setInterval(() => this.tick(), 5000);

    const res = await fetch('https://api.github.com/users/tapdal2020/repos');
    const data = await res.json();
    const repos = [];
    for(var i = 0; i < data.length; i++){
      repos.push(data[i].html_url);
    }

    const response = await fetch('https://api.github.com/users/tapdal2020');
    const user = await response.json();
    this.setState({
      repos: repos,
      img: user.avatar_url,
      loading: true
    });
  }
  
  handlePlay = e =>{
    this.setState({is_playing: !this.state.is_playing});
  }

  componentWillUnmount() {
    // clear the interval to save resources
    clearInterval(this.interval);
  }

  tick() {
    if(this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }


  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        // Checks if the data is not empty
        if(!data) {
          this.setState({
            no_data: true,
          });
          return;
        }

        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          no_data: false 
        });
      }
    });
  }

  render(){
    return (
    <Fragment>
      <Navbar />
      <div className="App">
        <div className='intro'>
          {this.state.img ? <Bio img={this.state.img}/> : <h2>Loading...</h2>}
        </div>
        <div>
          <About />
        </div>
        <div className='modules'>
          <Spotify state={this.state} />
          <Repos repos={this.state.repos}/>
        </div>
        <section className='showcase'>
          {/* <h1>Project Showcase</h1> */}
          <Projects />
        </section>  
      </div>
    </Fragment>
  );
  }
}


export default App;
