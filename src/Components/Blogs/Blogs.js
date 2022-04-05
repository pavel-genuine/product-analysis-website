import React from 'react';

const Blogs = () => {
    return (
        <div style={{margin:'30px 50px 150px 50px'}}>
            <h2>Context API</h2>
            <p>Context API is powerful feature of react by using it data could be shared with other components unlike parent-children props drilling. In Props drilling data could be sent to direct children components only but context API is minimize this limitation ,now data could be share other not only children but also other components by this. 
                createContext , useContext hooks are used for this feature. createContext returns provider and consumer.
            </p>
            <h2>Semantic Tags</h2>
            <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.
The pages made with semantic elements are much easier to read.
It has greater accessibility. It offers a better user experience.

            Elements such as header, footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
            <h2>Inline , Block and Inline-block elements </h2>
            <p> They consume the entire width available irrespective of their sufficiency. They always start in a new line and have top and bottom margins. It does not contain any other elements next to it. Inline elements occupy only enough width that is sufficient to it and allows other elements next to it which are inline. Inline elements don’t start from a new line and don’t have top and bottom margins as block elements have.
                Which elements placed in a same line and could not change height wise style properties those are Inline elements, Block elemnts placed in different block and could modify both height and width , and Inline-block elements placed in a samne line but could behave like block element</p>


        </div>
    );
};

export default Blogs;