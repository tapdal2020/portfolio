import React from 'react';
import Socials from './Socials';

const Bio = ({img}) => {
    return (
        <section className='bio'>
            <div className='avatar'>
                <img src={img} alt='Taylor Williamson' />
            </div>
            <div className='info'>
                <h3>About Me</h3>
                <p>My name is Taylor Williamson and I am a recent Computer Science and 
                    Engineering graduate from Texas A&M University actively seeking a 
                    software engineering position in the Houston area.</p>

                <p>Throughout my collegiate career, I have gained a plethora of experience 
                    developing desktop and console applications in primarily C++ and Java, 
                    while simultaneously exploring and learning about other languages such 
                    as python, HTML/CSS, and JavaScript in my free time. Since graduation, 
                    I have been continuing to learn and explore the world of full-stack 
                    development, and learning in-demand skills such as web development
                    utilizing the MERN (MongoDB, Express, React, Node.js) stack, SQL, and JavaScript/TypeScript.</p>
                <p>I am constantly learning and gathering new knowledge as I am striving to 
                    become a more efficient, effective, and well-rounded developer. </p>
                {/* <Socials /> */}
            </div>
        </section>
    )
}

export default Bio
