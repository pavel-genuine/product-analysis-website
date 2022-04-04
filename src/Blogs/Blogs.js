import React from 'react';

const Blogs = () => {
    return (
        <div style={{margin:'100px'}}>
            <h2>Context API</h2>
            <p>Context API is powerful feature of react by using it data could be shared with other components unlike parent-children props drilling. In Props drilling data could be sent to direct children components only but context API is minimize this limitation ,now data could be share other not only children but also other components by this. 
                createContext , useContext hooks are used for this feature. createContext returns provider and consumer.
            </p>
            <h2>Semantic Tags</h2>
            <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.

            Elements such as header, footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
            <h2>Inline , Block and Inline-block elements </h2>
            <p>Which elements placed in a same line and could not change height wise style properties those are Inline elements, Block elemnts placed in different block and could modify both height and width , and Inline-block elements placed in a samne line but behave like block element</p>


        </div>
    );
};

export default Blogs;