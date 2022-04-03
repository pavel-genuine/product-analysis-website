
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(()=>{

        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))

    },[])

    return (
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}} >
           
            {
                reviews.map(review=><Review key={review.id} review={review}></Review>).slice(0,3)
            }
            
        </div>
    );
};

export default Reviews;