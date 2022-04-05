
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import useReview from '../useReview/useReview';
import './ReviewsTab.css'

const ReviewsTab = () => {

    const [reviews, setReviews] = useReview()

    return (
        <div style={{margin:'30px auto'}}>
            <h2 style={{textAlign:'center'}}>Reviews :</h2>

          <div className='reviews'  >
   
          {
            reviews.map(review=><Review key={review.id} review={review}></Review>)
          }
    
          </div>
        </div>
    );
};

export default ReviewsTab;