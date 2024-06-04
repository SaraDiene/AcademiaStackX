import React from 'react';
import './style.css'

function Title(props){
    return(
        <div>
    <h2 className='title'>
        {props.title}
    </h2>
    </div>
    )
}

export default Title

