import React from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Player from './Player';



const Spotify = ({state}) => {
    return (
        <section className='spotify'>
            {state.token ? <div></div> : <h3 class='kick-back'>Kick back and enjoy some music during your visit!</h3>}
          {!state.token && (<div className='login-btn'><a
              className="login"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=false`}
            >
              
              <FontAwesomeIcon className='icon' icon={faSpotify}/> Login to Spotify
            </a> </div>
            )}
            
          {state.token && !state.no_data && (
            <Player
              item={state.item}
              is_playing={state.is_playing}
              progress_ms={state.progress_ms}
              //callback={this.handlePlay}
            />
          )}
          {state.no_data && (
            <p>
              You need to be playing a song on Spotify for something to appear here.
            </p>
          )}
        </section>
    )
}

export default Spotify
