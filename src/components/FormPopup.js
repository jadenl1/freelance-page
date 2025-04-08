import React from 'react'

import "./FormPopup.css"

const FormPopup = ({setPopup}) => {
  return (
    <>
        <div className="popup-overlay" onClick={()=>{setPopup(false)}}/>
        <div className="popup-container" onClick={(e)=>{e.stopPropagation()}}>
            <div className="popup-content">
                <h2 className="popup-title">Let's Make Your Project.</h2>
                <form className="popup-form">
                    <label>Your Name</label>
                    <input type="text" placeholder="John Appleseed" required/>
                    <label>Your Email</label>
                    <input type="email" placeholder="A good email we can respond to..." required/>
                    <label>Describe Your Project</label>
                    <textarea placeholder="Get into the details about the tech and your budget..." rows={8} required></textarea>
                    <button type="submit" className="navbar-button">Start the Conversation ➝</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default FormPopup