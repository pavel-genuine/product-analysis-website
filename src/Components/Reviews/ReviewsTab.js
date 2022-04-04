
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const ReviewsTab = () => {

    const [reviews, setReviews] = useState([])

    useEffect(()=>{

        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))

    },[])

    return (
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr' , margin:'20px 100px'}} >
           
            {
                reviews.map(review=><Review key={review.id} review={review}></Review>)
            }
            
        </div>
    );
};

export default ReviewsTab;