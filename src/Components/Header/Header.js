import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', margin:'20px 550px'}}>
            <CustomLink to='/'> HOME</CustomLink>
            <CustomLink to='/reviews'> REVIEWS</CustomLink>
            <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink to='/blogs'>BLOGS</CustomLink>
        </div>
    );
};

export default Header;