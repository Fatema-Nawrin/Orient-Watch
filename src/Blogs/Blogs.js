import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-4 p-2 md:p-6'>
            <h1 className='text-center text-xl lg:text-2xl font-semibold pb-4'>Questions and Answers Blog</h1>
            <h2 className='text-lg font-semibold my-4'>What is the purpose of context API?</h2>
            <p className='lg:pr-4 mb-4'>Usually, data is passed from up (parents) to down (child) through props. It is called props drilling. So, in order to pass data in a child component through many nested elements, data is passed by every level of trees which can be quite difficult. To solve this problem, context API is used. Context provides a way to pass data  withot passing props in every level.</p>

            <h2 className='text-lg font-semibold my-4'>What are Semantic tags?</h2>
            <p className='lg:pr-4 mb-4'>Semantic tags in HTML describes the meaning of the tag in human and machine way to both the browser and developer. Header, footer, table, form; these are semantic elements because these tag describe properly the use and content of them. On the other hand, div and span, these non semantic tags tell us nothing about their contents. Some semantic tags in HTML5 are: article, aside, figure, figcaption, header, footer, section, main, nav and time etc.</p>

            <h2 className='text-lg font-semibold my-4'>What are the differences between Inline Vs Block Vs Inline-block?</h2>
            <p className='lg:pr-4 mb-2'>Inline elements does not start in a new line. Width and height properties can not be set in them. Span, a, img are default inline elements.</p>
            <p className='lg:pr-4 mb-2'> Inline-block elements are same as inline; does not start in a new line. But, width and height properties can be set in them.</p>
            <p className='lg:pr-4 mb-2'>  Block elements start in a new line and takes full width available. Width and height values can also be set. Div, h1, p are default block elements. </p>
        </div>
    );
};

export default Blogs;