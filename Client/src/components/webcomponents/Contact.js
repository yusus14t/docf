import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMessage } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-method">
         <FontAwesomeIcon className='icon' icon={faPhone} />

          <span>Phone: +1 123 456 7890</span>
        </div>
        <div className="contact-method">
            <FontAwesomeIcon className='icon' icon={faMessage} />
          <span>WhatsApp: +1 987 654 3210</span>
        </div>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
