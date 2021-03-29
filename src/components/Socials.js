import React from 'react'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Socials = () => {
    return (
        <div className='socials'>
            <div className='links'>
                <div>
                    <a href='https://github.com/tapdal2020'><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                </div>
                <div>
                    <a href='http://linkedin.com/in/taylor-williamson-2020'><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                </div>
                <div>
                    <a href='mailto:tawilliamson2020@gmail.com'><FontAwesomeIcon className='icon' icon={faEnvelope} /></a>
                </div>
            </div>
        </div>
    )
}

export default Socials
