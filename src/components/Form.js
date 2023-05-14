import React from 'react'
import { useState, useEffect, useContext } from "react";

// Context
import ShowsContext from "../context/shows/showsContext";
import Popup from "../components/Popup";
// Components
import Loader from "../components/Loader";

const Form = ({ match }) => {

  const { singleShow} = useContext(ShowsContext);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <>
     <h1 className="bookname">Movie Name - <b>{singleShow.name}</b></h1>
  
    <div className="info">
      <h1 className="date">Date - {date}</h1>
      <p><h1 className='price'>Price:</h1> <button className='btn3'>Rs.0 - Rs.200</button> <button className='btn3'>Rs.201 - Rs.400</button></p>
      <p><h1 className='price'>Time:</h1> <button className='btn3'>10:30 AM</button> <button className='btn3'>7:15 PM</button></p>
      <button className='final' onClick={() => alert('Ticket Booked')}>Book Ticket</button>
      
    </div>
    </>
  )
}

export default Form;