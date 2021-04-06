import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faProjectDiagram, faMusic } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <button name='music'><FontAwesomeIcon className='icon' icon={faMusic} />Music</button>
            <button name='bio'><FontAwesomeIcon className='icon' icon={faAddressCard} />Bio</button>
            <button name='repos'><FontAwesomeIcon className='icon' icon={faGithub} />Repositories</button>
            <button name='projects'><FontAwesomeIcon className='icon' icon={faProjectDiagram} />Projects</button>
        </div>
    )
}

export default Sidebar
