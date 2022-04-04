import React from 'react';

const Review = (props) => {

    const {name, img, review,rating}=props.review

    return (
        <div style={{ margin:'30px', border:'1px solid grey'}}>
            <img style={{width:'100%' , borderRadius:'50%' }} src={img} alt="" />
            <div style={{ padding:'5px'}} >
            <h4>Reviewer : {name}</h4>
            <p>Review : {review}</p>
            <h5>Rating : {rating}</h5>
            </div>
        </div>
    );
};

export default Review;