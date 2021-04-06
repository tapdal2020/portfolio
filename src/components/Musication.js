import musication from '../assets/images/musication.png';
import musicMap from '../assets/images/musicmap.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react';

const Musication = () => {

    const [index, setIndex] = useState(0);
    const images = [musication, musicMap];

    const handlePrev = e => {
        if(index > 0){
            setIndex(index-1);
        }
    }

    const handleNext = e => {
        if(index < images.length-1){
            setIndex(index+1);
        }
    }

    return (
       <div>
            <div className='header'>
                <h2>Musication</h2>
                <h3>Human-Computer Interaction</h3>
            </div>
            <div className='content'>
                <p>This was a group project conducted as part of my Human-Computer Interactions course. It is essentially a location-based 
                    music visualizer which links to the user's Spotify account, and allows them to save the current song as well as their 
                    geographical location, a musical snapshot if you will. The idea is that after some traveling and some consistent use, 
                    the user would have a map full of various pins which they can go back and relive the memories they associate with the song 
                    and to that place.</p>
                <img src={images[index]} alt='pic' />
                 <div class='arrows'>
                    <button onClick={e=>handlePrev(e)}>{index === 0 ? <FontAwesomeIcon className='invisible' icon={faArrowLeft} /> : <FontAwesomeIcon class='icon' icon={faArrowLeft} />}</button>
                    <button onClick={e=>handleNext(e)}>{index === images.length-1 ? <FontAwesomeIcon className='invisible' icon={faArrowRight} /> : <FontAwesomeIcon class='icon' icon={faArrowRight} />}</button>
                </div>
            </div>
        </div>
    )
}

export default Musication
