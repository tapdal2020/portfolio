import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile, faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Dropdown = () => {
    return (
        <div>
            <a className='menu-item' href='https://github.com/tapdal2020'><FontAwesomeIcon className='icon' icon={faGithub}/>Github</a>
            <a className='menu-item' href='http://linkedin.com/in/taylor-williamson-2020'><FontAwesomeIcon className='icon' icon={faLinkedin} />LinkedIn</a>
            <a className='menu-item' href={resume} ><FontAwesomeIcon className='icon' icon={faFile} />Resume</a>
            <a className='menu-item' href='mailto:tawilliamson2020@gmail.com'><FontAwesomeIcon className='icon' icon={faEnvelope} />Email</a>
        </div>
    )
}

export default Dropdown
