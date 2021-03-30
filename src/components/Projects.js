import React, { useState } from 'react'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import SafetyGearDetection from './SafetyGearDetection';
import Musication from './Musication';
import DontationManager from './DonationManager';
const Projects = () => {

    const [index, setIndex] = useState(0);
    const projects = [
    <DontationManager />,
    <SafetyGearDetection/>,
    <Musication />
]

const handlePrev = e => {
    if(index > 0){
        setIndex(index-1);
    }
}

const handleNext = e => {
    if(index < projects.length-1){
        setIndex(index+1);
    }
}
        return (
            <div>
                {projects[index]}
                {index===0 ? <button onClick={e=>handlePrev(e)} className='disabled'><FontAwesomeIcon class='icon-dis' icon={faArrowLeft} />Previous Project</button> : <button onClick={e=>handlePrev(e)} className='btn'><FontAwesomeIcon class='icon' icon={faArrowLeft} />Previous Project</button>}
                {index===projects.length-1 ? <button onClick={e=>handlePrev(e)} className='disabled'>Next Project<FontAwesomeIcon class='icon-dis' icon={faArrowRight} /></button> : <button onClick={e=>handleNext(e)} className='btn'>Next Project<FontAwesomeIcon class='icon' icon={faArrowRight} /></button>}
            </div>
        )
}

export default Projects
