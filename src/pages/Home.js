import React, { useEffect, useState } from 'react';
import QuoteText from '../components/QuoteText';
import { TwitterShareButton } from 'react-share';
// import Features from '../components/Features'
import * as BsIcons from 'react-icons/bs';
import * as SiIcons from 'react-icons/si';
import * as CgIcons from 'react-icons/cg';
import './Home.css';

const Quote = () => {
  const [isDark, setIsDark] = useState(false);
  const [randomQuote, setRandomQuote] = useState({
    data: [
      {
        quoteText:
          'I think the thing we see is that as people are using video games more, they tend to watch passive TV a bit less. And so using the PC for the Internet, playing video games, is starting to cut into the rather unbelievable amount of time people spend watching TV.',
        quoteAuthor: 'Bill Gates',
        quoteGenre: 'business',
      },
    ],
  });

  const nextQuote = () => {
    try {
      fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
        .then((response) => response.json())
        .then((data) => {
          setRandomQuote(data);
        });
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  useEffect(nextQuote, []);

  const generateAuthorSlug = (authorName) =>
    authorName.toLowerCase().split(' ').join('-');

  const fullQuote = {
    author: randomQuote.data[0].quoteAuthor,
    text: randomQuote.data[0].quoteText,
    genre: randomQuote.data[0].quoteGenre,
    slug: generateAuthorSlug(randomQuote.data[0].quoteAuthor),
  };

  const handleClick = () => setIsDark(!isDark);

  const Features = () => (
    <div className="feature-container ">
      <div className="modes" onClick={handleClick}>
        <BsIcons.BsSun className="darkmode" size="24" />
      </div>
      <div className="share-twitter">
        <TwitterShareButton url="twitter.com/intent/tweet" title={randomQuote}>
          <SiIcons.SiTwitter className="twitter-icon" size="24" />
        </TwitterShareButton>
      </div>
      <div className="next-quote" onClick={nextQuote}>
        <button className="next">Next Quote</button>
        <CgIcons.CgArrowLongRight size="25" className="next-icon" />
      </div>
    </div>
  );

  return (
    <div className={isDark ? 'Dark-Mode' : 'Light-Mode'}>
      <QuoteText
        quoteText={fullQuote.text}
        quoteAuthor={fullQuote.author}
        quoteGenre={fullQuote.genre}
        quoteSlug={fullQuote.slug}
      />
      <Features />
    </div>
  );
};

export default Quote;
