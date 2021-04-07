import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Project = () => {
    return (
        <section className='project-content'>
            <div className='header'>
                <h2>Donation Manager</h2>
                <h3>Brazos Valley Jazz Society</h3>
                <p>As part of my programming studio class, my team and I partnered with a local non-profit organization called
                    the Brazos Valley Jazz Society, and developed a SaaS solution to act as their donation management system powered
                    by Ruby on Rails, mySQL, and deployed using Heroku.</p>
            </div>
            <div className='content'>
                
                <iframe className='yt-player' src="https://www.youtube.com/embed/UTZUZB-R-ew" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class='arrows'>
                    <button className='btn-invisible'></button>
                    <button className='btn-invisible'></button>
                </div>
            </div>
        </section>
    )
}

export default Project
