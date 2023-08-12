import React from 'react';
import { Link } from 'react-router-dom';


function WebFooter() {
    return (
      <footer className="sigma_footer style-5 pb-0 footer">
        <p className="mb-0 p-2 text-center text-light">
          Made by <Link style={{color:"skyblue"}} target='_blank' to="https://erahamtech.com">EraHam Tech</Link> | Copyright &#169;, Doctor Time. All rights reserved
        </p>
      </footer>
    ) ;
}

export default WebFooter;