import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, } from '@fortawesome/free-solid-svg-icons'




const Header = () => {
    return (
       <div>
         <div className='nav'>
             <label htmlFor="toggler">
                <FontAwesomeIcon className='fa-bar' icon={faBars} />
            </label>
            <input type="checkbox" name="" id="toggler" />

         <div className='header'>
            <CustomLink to='/'> HOME</CustomLink>
            <CustomLink to='/reviews'> REVIEWS</CustomLink>
            <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink to='/blogs'>BLOGS</CustomLink>
            
         </div>
      </div>
         <h2> Review Master</h2>

       </div>
    );
};

export default Header;