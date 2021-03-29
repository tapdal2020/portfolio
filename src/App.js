import React, {Component, Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { authEndpoint, clientId, redirectUri, scopes } from "./components/config";
import hash from "./components/hash";
import Player from "./components/Player";
import Repos from "./components/Repos";
import Bio from "./components/Bio";
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
      repos: []
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
    }

    // set interval for polling every 5 seconds
    this.interval = setInterval(() => this.tick(), 5000);

    const res = await fetch('https://api.github.com/users/tapdal2020/repos');
    const data = await res.json();
    const repos = [];
    for(var i = 0; i < data.length; i++){
      repos.push(data[i].html_url);
    }
    this.setState({repos: repos});
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
      <div className='navbar'>
        <h2>Taylor Williamson</h2>
        <a className='menu-item' href='https://github.com/tapdal2020'><FontAwesomeIcon className='icon' icon={faGithub}/>Github</a>
        <a className='menu-item' href='http://linkedin.com/in/taylor-williamson-2020'><FontAwesomeIcon className='icon' icon={faLinkedin} />LinkedIn</a>
        <a className='menu-item' href='./assets/files/ResumeTaylor2021.pdf'><FontAwesomeIcon className='icon' icon={faFile} />Resume</a>
        <a className='menu-item' href='mailto:tawilliamson2020@gmail.com'><FontAwesomeIcon className='icon' icon={faEnvelope} />Email</a>
      </div>
      <div className="App">
        <div className="sidebar">
          <div className='spotify'>
          {this.state.token ? <div></div> : <h3 class='kick-back'>Kick back and listen to some music!</h3>}
          {!this.state.token && (<div className='login-btn'><a
              className="login"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              
              <FontAwesomeIcon className='icon' icon={faSpotify}/> Login to Spotify
            </a> </div>
            )}
            
          {this.state.token && !this.state.no_data && (
            <Player
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.state.progress_ms}
            />
          )}
          {this.state.no_data && (
            <p>
              You need to be playing a song on Spotify, for something to appear here.
            </p>
          )}
          </div>
          <Repos repos={this.state.repos}/>
        </div>
        <div className='main'>
          <Bio />
        </div>
      </div>
    </Fragment>
  );
  }
}


export default App;
