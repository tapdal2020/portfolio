import React, { useState, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile, faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {

    const [toggle, setToggle] = useState(false);

    const handleClick = e => {
        setToggle(!toggle);
    }

    return (
        <Fragment>
            <button className='toggle' onClick={e=>handleClick(e)}>{toggle ? <FontAwesomeIcon className='icon' icon={faTimesCircle} /> : <FontAwesomeIcon className='icon' icon={faBars} />}</button>
        </Fragment>
    )
}

export default Navigation
