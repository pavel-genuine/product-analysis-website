import React from 'react';
import './Review.css'

const Review = (props) => {

    const {name, img, review,rating}=props.review

    return (
        <div className='review' >
            <img style={{width:'90%' ,border:'1px solid rgb(169, 14, 14)', borderRadius:'50%', margin:'20px' }} src={img} alt="" />
            <div style={{ padding:'10px'}} >
            <h4>Reviewer : {name}</h4>
            <h4>Review :</h4>
            <p title={review.length<150?'':review} >{review.length<150? review:review.slice(0,150)+'...'}</p>
            <h5>Rating : {rating}</h5>
            </div>
        </div>
    );
};

export default Review;