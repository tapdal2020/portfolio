import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/files/ResumeTaylor2021.pdf';

const Footer = () => {
    return (
        <footer className='footer'>
          <ul className='navlinks'>
                <li className='link'><a href='https://github.com/tapdal2020'><FontAwesomeIcon className='icon' icon={faGithub}/>Github</a></li>
                <li className='link'><a href='http://linkedin.com/in/taylor-williamson-2020'><FontAwesomeIcon className='icon' icon={faLinkedin} />LinkedIn</a></li>
                <li className='link'><a href={resume} ><FontAwesomeIcon className='icon' icon={faFile} />Resume</a></li>
                <li className='link'><a href='mailto:tawilliamson2020@gmail.com'><FontAwesomeIcon className='icon' icon={faEnvelope} />Email</a></li>
            </ul>  
            <ul className='navlogos'>
                <li className='link'><a href='https://github.com/tapdal2020'><FontAwesomeIcon className='icon' icon={faGithub}/></a></li>
                <li className='link'><a href='http://linkedin.com/in/taylor-williamson-2020'><FontAwesomeIcon className='icon' icon={faLinkedin} /></a></li>
                <li className='link'><a href={resume} ><FontAwesomeIcon className='icon' icon={faFile} /></a></li>
                <li className='link'><a href='mailto:tawilliamson2020@gmail.com'><FontAwesomeIcon className='icon' icon={faEnvelope} /></a></li>
            </ul>  
        </footer>
    )
}

export default Footer
