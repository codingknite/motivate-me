import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Quote from '../components/AuthorQuote';
import '../components/AuthorQuotes.css';

const Catalogue = (props) => {
    const [authorQuotes, setAuthorQuotes] = useState([]);

    const generateAuthorName = () => props.match.params.authorName
        .split('-')
        .map((name) => name[0].toUpperCase() + name.substr(1))
        .join(' ');

    const author = generateAuthorName();

    useEffect(() => {
        fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`)
            .then((response) => response.json())
            .then((response) => {
                setAuthorQuotes(response.data);
            });
    }, [author]);

    return (
        <>
            <div className="author-catalogue">
                <Link to={process.env.PUBLIC_URL + "/"}>
                    <div className="back-to-home">
                        <button className="back">Back</button>
                    </div>
                </Link>
                <div className="author-quotes">
                    <h1 className="author-name">{author}</h1>
                    {authorQuotes.map((quote, index) => (
                        <Quote quoteText={quote.quoteText} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Catalogue;
