import React from 'react';
import Quote from './Quote';

const Bio = ({img}) => {
    return (
        <section className='bio'>
            <div className='avatar'>
                <img src={img} alt='Taylor Williamson' />
            </div>
            <div className='info'>
                <div className='title'>
                    <h1>Howdy! My name is Taylor Williamson and welcome to my portfolio!</h1>
                </div>
                <Quote />
            </div>
        </section>
    )
}

export default Bio
