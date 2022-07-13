import React from 'react';
import '../assets/css/Contact.css';

function Contact() {
  return (
    <div className='kss-contact-wrapper container'>
      <form className='container'>
        <div className="mb-3">
          <label for="name" className="form-label">Full Name :</label>
          <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">Message :</label>
          <textarea className="form-control" id="message" rows='5'>
          </textarea>
        </div>
        <div className="mb-3">
          <button className='btn btn-success'>
            <i className='fas fa-paper-plane'></i> Send
          </button>
        </div>

      </form>
    </div>
  )
}


export default Contact;