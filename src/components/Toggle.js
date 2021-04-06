import React from 'react'

const Toggle = ({callback}) => {

    return (
        <div>
            <button className='toggle' onClick={e=>callback(e)}>{toggle ? <FontAwesomeIcon className='icon' icon={faTimesCircle} /> : <FontAwesomeIcon className='icon' icon={faBars} />}</button>
        </div>
    )
}

export default Toggle
