import React from 'react'
import Form from './Form';

import ShowsContext from "../context/shows/showsContext";

function Popup(props){
    return (props.trigger)?(
        <div className="popup">
           <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <Form/>
           </div>
        </div>
    ):"";
}

export default Popup