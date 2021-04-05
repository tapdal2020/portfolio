import React from 'react'
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Repos = ({repos}) => {
    return (
        <section className='github'>
            <h2>My Repositories</h2>
            <div className='repos'>
                {repos.map(r => <div className='repo'><FontAwesomeIcon className='icon' icon={faGithub} /><a href={r}>{r.split('/')[r.split('/').length-1]}</a></div>)}
            </div>
        </section>
    )
}

export default Repos
