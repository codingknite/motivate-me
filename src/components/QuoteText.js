import React from 'react'
import { Link } from 'react-router-dom'
import * as GoIcons from 'react-icons/go';
import * as CgIcons from 'react-icons/cg';
import * as MdIcons from 'react-icons/md';


const Quote = ({ quoteText, quoteAuthor, quoteGenre, quoteSlug }) => (
    <div className="quote-container">
        <div className="quote">
            <div className="quote-bar"></div>
            <div className="quote-text">
                <GoIcons.GoQuote size="30" />
                <h1 className="text">{quoteText}</h1>
                <div className="author-info">
                    <Link to={process.env.PUBLIC_URL + "/author/" + quoteSlug} className="author-link">
                        <h4 className="author">{quoteAuthor}</h4>
                        <h4 className="genre">{quoteGenre}</h4>
                        <div className="touch-icon">
                            <CgIcons.CgArrowLongRight size="25" className="right-arrow" />
                            <MdIcons.MdTouchApp size="28" className="point-icon" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Quote;