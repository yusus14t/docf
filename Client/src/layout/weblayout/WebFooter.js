import React from 'react';
import Logo from '../../assets.web/img/Doctor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faTwitter, faFaceboo}   from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faInstagram, faFacebook, faLinkedin, faGoogle} from '@fortawesome/free-brands-svg-icons'


function WebFooter() {
    return (
      <footer className="sigma_footer style-5 pb-0 footer">
        <p className="mb-0 p-2 text-center">
          Made with &#10084;&#65039; in India | Copyright &#169;, Doctor Time. All rights reserved
        </p>
      </footer>
    );
}

export default WebFooter;