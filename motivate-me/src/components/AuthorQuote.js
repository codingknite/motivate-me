import React from 'react';

const Quote = ({ quoteText }) => (
  <>
    <div className="ind-author-quote">
      <div className="ind-quote-bar"></div>
      <div className="quote-text">{quoteText}</div>
    </div>
  </>
);

export default Quote;
