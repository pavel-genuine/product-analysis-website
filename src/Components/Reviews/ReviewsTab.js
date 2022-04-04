
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import useReview from '../useReview/useReview';

const ReviewsTab = () => {

    const [reviews, setReviews] = useReview()

    return (
        <div>
            <h2 style={{textAlign:'center'}}>Reviews :</h2>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr' , margin:'20px 100px'}} >
   
          {
            reviews.map(review=><Review key={review.id} review={review}></Review>)
          }
    
          </div>
        </div>
    );
};

export default ReviewsTab;