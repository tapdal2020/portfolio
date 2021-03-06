import flightDash from '../assets/images/flight-dash.png'
import imageDetection from '../assets/images/imagedetection.png'
import screenshots from '../assets/images/screenshots.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'

const SafetyGearDetection = () => {

    const images = [flightDash, imageDetection, screenshots];
    const [index, setIndex] = useState(0);

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
        <section className='project-content'>
            <div className='header'>
                <h2>Safety Gear Detection</h2>
                <h3>Senior Captstone Project</h3>
                <p>My group and I partnered with the Construction Science department at A&M to develop this project as a part of my senior capstone course.
                    Our mission was to develop an Android application which can simultaneously operate the drone and perform image processing in order to
                    detect Personal Protective Equipment (PPE) violations. To create our object detection engine, we trained our model using a combination of
                    premade and self-collected data, and utilized a "You Only Look Once" (YOLO) algorithm to perform object deteciton in real time.</p>
            </div>
            <div className='content'>
                
                <img src={images[index]} alt='pic' />
                <div class='arrows'>
                    {index===0 ? <button onClick={e=>handlePrev(e)} className='disabled'><FontAwesomeIcon class='icon-dis' icon={faArrowLeft} />Previous Image</button> : <button onClick={e=>handlePrev(e)} className='btn'><FontAwesomeIcon class='icon' icon={faArrowLeft} />Previous Image</button>}
                    {index===images.length-1 ? <button onClick={e=>handleNext(e)} className='disabled'>Next Image<FontAwesomeIcon class='icon-dis' icon={faArrowRight} /></button> : <button onClick={e=>handleNext(e)} className='btn'>Next Image<FontAwesomeIcon class='icon' icon={faArrowRight} /></button>}
                </div>
            </div>
        </section>
    )
}

export default SafetyGearDetection
