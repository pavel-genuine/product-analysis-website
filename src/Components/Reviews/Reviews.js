
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import useReview from '../useReview/useReview';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useReview()

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2 style={{textAlign:'center'}}>Reviews :</h2>
            <div className='reviews'  >
           
           {
               reviews.map(review=><Review key={review.id} review={review}></Review>).slice(0,3)
           }
          </div>
         <div>
           <Link to='/reviews'> <button className='hover-btn' >All Reviews </button></Link>
           </div>
           
       
        </div>
    );
};

export default Reviews;