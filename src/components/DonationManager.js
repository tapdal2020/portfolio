import React from 'react'

const Project = () => {
    return (
        <div className='project'>
            <div className='header'>
                <h2>Donation Manager</h2>
                <h3>Brazos Valley Jazz Society</h3>
            </div>
            <div className='content'>
                <p>As part of my programming studio class, my team and I partnered with a local non-profit organization called
                    the Brazos Valley Jazz Society, and developed a SaaS solution to act as their donation management system powered
                    by Ruby on Rails, mySQL, and deployed using Heroku.</p>
                <iframe className='yt-player' src="https://www.youtube.com/embed/UTZUZB-R-ew" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Project
