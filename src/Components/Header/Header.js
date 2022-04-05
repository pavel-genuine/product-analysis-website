import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, } from '@fortawesome/free-solid-svg-icons'




const Header = () => {
    return (
       <div className='nav' >
            <h2 style={{textAlign:'center'}}>Welcome To Review Master</h2>
             
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
    );
};

export default Header;