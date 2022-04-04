import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'


const Header = () => {
    return (
       <div >
            <h2 style={{textAlign:'center'}}>Welcome To Review Master</h2>
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