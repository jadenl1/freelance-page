import React, { useRef, useState } from 'react';
import "./FormPopup.css";

const FormPopup = ({ setPopup }) => {
    const [closing, setClosing] = useState(false);

    const name = useRef(null);
    const email = useRef(null);
    const desc = useRef(null);

    const recipientEmail = ""; // Add the recipient email address here

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: name.current.value,
            email: email.current.value,
            desc: desc.current.value
        };

        try {
            const response = await fetch('localhost:4000/send-project-req', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    to: recipientEmail,
                    subject: `Teryn - New Project Request`,
                    message: `From ${formData.name}, ${formData.email}.\n\nDescription: ${formData.desc}`
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Email sent:', data);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const handleClose = () => {
        // Trigger reverse animations
        setClosing(true);
        // Wait for the animation duration before removing the popup
        setTimeout(() => {
            setPopup(false);
        }, 300);
    };

    return (
        <>
            <div
                className={`popup-overlay ${closing ? "closing" : ""}`}
                onClick={handleClose}
            />
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                <div className={`popup-content ${closing ? "closing" : ""}`}>
                    <h2 className="popup-title">Let's Make Your Project.</h2>
                    <form className="popup-form" onSubmit={handleSubmit}>
                        <label>Your Name</label>
                        <input ref={name} type="text" placeholder="John Appleseed" required />
                        <label>Your Email</label>
                        <input ref={email} type="email" placeholder="A good email we can respond to..." required />
                        <label>Describe Your Project</label>
                        <textarea ref={desc} placeholder="Get into the details about the tech and your budget..." rows={8} required></textarea>
                        <button type="submit" className="navbar-button">
                            Start the Conversation ➝
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormPopup;
